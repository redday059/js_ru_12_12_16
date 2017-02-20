import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'

class ArticleListRoute extends Component {
    render() {
        //console.log(this.props.children);
        return(
            <div className="container">
                <ArticleList />
                {this.props.article}
                {this.props.children}
            </div>
        )
    }
}

export default ArticleListRoute