import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'

class ArticleListRoute extends Component {
    render() {
        return(
            <div>
                <ArticleList />
                {this.props.children}
            </div>
        )
    }
}

export default ArticleListRoute