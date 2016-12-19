import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { comment } = this.props
        return (
            <div>
                <h5> {comment.user}</h5>
                <div>{comment.text}</div>
            </div>
        )
    }
}
