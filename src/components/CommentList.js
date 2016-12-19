import React, { Component } from 'react'
import Comment from './Comment'

export default function CommentList(props) {
    const { comments } = props
    const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
        <div>
            <ul>
                {/*some comment*/}
                {commentElements}
            </ul>
        </div>
    )
}
