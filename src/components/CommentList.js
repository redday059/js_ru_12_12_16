import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    static defaultProps = {
        commentsIDs: []
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
        console.log('ttttt' ,this.props)
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => console.log(comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

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
        const { comments } = state;
        const { commentsIDs} = props;
        return {
            comments: comments.filter((comment) => commentsIDs.includes(comment.id))
        }
})(toggleOpen(CommentList))
