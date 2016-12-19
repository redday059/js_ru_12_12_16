import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false,
        commentsAreShown: false
    }

    render() {
        const { article } = this.props
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
                {this.getButton()}
                {this.getComments()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = () => {
        this.setState({
            commentsAreShown: !this.state.commentsAreShown
        })
    }


    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
            </section>
        )
    }

    getButton() {
        const comments = this.props.article.comments

        if (!this.state.isOpen || !comments || !comments.length) return null

        const buttonText = this.state.commentsAreShown ? 'Hide comments' : 'Show comments (' + (comments ? comments.length : '') + ')'


        return (
            <button onClick={this.toggleComments}>
                {buttonText}
            </button>
        )
    }

    getComments() {
        if(this.state.commentsAreShown) {
            const comments = this.props.article.comments || []
            return <CommentList comments = {comments} />
        }
    }
}
