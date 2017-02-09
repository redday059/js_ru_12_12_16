import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import Loader  from './Loader/index'
import './Loader/style.css'
import LocalizedText from './LocalizedText'


class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    static contextTypes = {
        user: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        // instead of checking if comments have been loaded in the line below,
        // we check it in AC loadArticleComments(id).
        // if (!this.props.isOpen && nextProps.isOpen && !nextProps.article.loadedComments && !nextProps.article.loadingComments) {
        if (!this.props.isOpen && nextProps.isOpen){
            nextProps.loadArticleComments(this.props.article.id)
        }
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        if (this.props.article && !this.props.article.text) return null;
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? <LocalizedText text='hide comments' />  : <LocalizedText text='show comments' /> }
        </a>
    }

    getBody() {

        const { comments, article, isOpen, addComment } = this.props;
        if (!isOpen) return null;
        if (article.loadingComments || !article.loadedComments) return <Loader />;
        const form = <NewCommentForm addComment = {(comment) => addComment(article.id, comment)} />;
        if (!comments.length) return <div><p><LocalizedText text="No comments yet"/></p>{form}</div>;

        const commentItems = comments.map(comment => {
            return <li key = {comment.id}><Comment comment = {comment} /></li>
        });

        return (
            <div>
                <b>User from React context: {this.context.user}</b>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect(
    (state, props) => {
        return {
            comments: props.article.comments && props.article.comments.map(id => state.comments.getIn(['entities', id]))
        }
}, { loadArticleComments, addComment}, null, {pure: false})(toggleOpen(CommentList))
