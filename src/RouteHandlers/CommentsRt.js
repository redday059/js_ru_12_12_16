import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <CommentsPaginator />
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default CommentRoot
