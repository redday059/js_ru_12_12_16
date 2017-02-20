import React, { PropTypes }  from 'react'

function Comment(props) {
    const { comment: { text, user } } = props
    return (
        <div className="comments__inner-wrap">
            <div className="comments__user">
                <div className="comments__avatar"></div>
                <div className="comments__name">{user}</div>
            </div>
            <div className="comments__text">{text}</div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}

export default Comment