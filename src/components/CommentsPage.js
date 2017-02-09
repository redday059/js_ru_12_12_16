import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { loadCommentsForPage } from '../AC'
import Comment from './Comment'
import Loader from'./Loader'

class CommentsPage extends Component {

    static propTypes = {
        page: PropTypes.number.isRequired,
        // From connect
        comments: PropTypes.object,
        total: PropTypes.number
    }

    componentDidMount() { checkAndLoad(this.props) }

    componentWillReceiveProps = checkAndLoad

    render() {
        const { total, comments, page } = this.props
        if (!total) return <Loader />
        if ( (page - 1) * 5 >= total ) return <h3>No comments for this page</h3>
        if (!comments || !comments.size) return <Loader />

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <ul>
                {commentItems}
            </ul>
        )
    }
}

function checkAndLoad(props) {
    const { page, comments, loadCommentsForPage } = props
    if (!comments) loadCommentsForPage(page)
}

export default connect((state, props) => {
    const total = state.comments.total
    const pageIds = state.comments.getIn(['pagination', props.page])
    const comments = pageIds && pageIds.map(id => state.comments.getIn(['entities', id]))
    return { comments, total }
}, { loadCommentsForPage })(CommentsPage)
