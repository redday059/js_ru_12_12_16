import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import Loader  from './Loader/index'
import './Loader/style.styl'
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
        return (
            <div className="clearfix">
                <button className="btn article__comments-btn pull-right" href="#" onClick = {this.props.toggleOpen}>
                    {this.props.isOpen ? <LocalizedText text='hide comments' />  : <LocalizedText text='show comments' /> }
                </button>
            </div>
        )
    }

    getBody() {

        const { comments, article, isOpen, addComment } = this.props;
        if (!isOpen) return null;
        if (article.loadingComments || !article.loadedComments) return <Loader />;
        const form = <NewCommentForm addComment = {(comment) => addComment(article.id, comment)} />;
        if (!comments.length) return <div><p><LocalizedText text="No comments yet"/></p>{form}</div>;

        const commentItems = comments.map(comment => {
            return (<li key = {comment.id} className="comments__item">
                        <Comment comment = {comment} />
                    </li>
            )
        });

        return (
            <div className="comments">
                <ul className="comments__list">{commentItems}</ul>
                <div className="comments__context"> User from React context:
                    <span className="comments__context-value">
                        {this.context.user ? this.context.user: "not indicated"}
                    </span>
                </div>
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
