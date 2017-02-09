import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    render() {
        return (
            <div>
                <h1>Comments pagination</h1>
                <CommentsPaginator />
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot
