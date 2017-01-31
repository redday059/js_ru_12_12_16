import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import Loader  from './Loader/index'
import './Loader/style.css'


class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        // console.log('******** nextProps: ', nextProps);
        // console.log('nextProps ..  ', nextProps.article.loadedComments)
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
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {

        const { comments, article, isOpen, addComment } = this.props
        if (!isOpen) return null
        if (article.loadingComments || !article.loadedComments) return <Loader />
        const form = <NewCommentForm addComment = {(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => {
            console.log('!!!   ',comment)
            return <li key = {comment.id}><Comment comment = {comment} /></li>
        })


        return (
            <div>
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
}, { loadArticleComments, addComment})(toggleOpen(CommentList))
