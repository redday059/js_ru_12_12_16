import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle, loadArticleById } from '../../AC'
import { connect } from 'react-redux'
import Loader  from '../Loader/Loader'
import './style.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        // from connect:
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    componentDidMount(){
        //console.log('this')
        if (this.props.isOpen) {
            console.log('!!!!!!!!!', this.props.id)
            this.props.loadArticleById(this.props.id)
        }
    }

    render() {
        const { article, onClick } = this.props;
        const loading = article.loading
        const loader = loading && <Loader />
        if(!article) return null
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                <div>
                    <a href="#" onClick = {this.handleDelete}>delete article</a>
                </div>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                    {loader}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList article = {this.props.article} />
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect(
    (state, props) => {
        return {
            article: state.articles.getIn(['entities', props.id])
        }
    }, { deleteArticle, loadArticleById })(Article)