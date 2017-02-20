import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux'

class CommentsPaginator extends Component {
    static propTypes = {
        total: PropTypes.number
    };

    render() {
        const total = this.props.total
        //if (!total) return null
        const links = Array(...Array(Math.ceil(total/5))).map((link, index) => {
            return (
                <li key={index} className="pagination__page">
                    <Link to={`/comments/${index+1}`} activeStyle={{color: 'red'}} className="pagination__link" activeClassName="pagination__link_active">
                        {index + 1}
                    </Link>
                    {/*<span className="pagination__link pagination__link_disable">{index + 1}</span>*/}
                </li>
        )});
        return (
            <ul className="pagination__list">
                {links}
            </ul>
        );
    }
}

export default connect(state => {
    return {
        total: state.comments.total
    }
})(CommentsPaginator);
