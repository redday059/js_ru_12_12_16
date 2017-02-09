import React, { Component, PropTypes } from 'react'
import CommentsPage from '../components/CommentsPage'

class CommentsPageRoute extends Component {
    render() {
        return(
            <div>
                <CommentsPage page={Number(this.props.params.page)}/>
            </div>
        )
    }
}

export default CommentsPageRoute