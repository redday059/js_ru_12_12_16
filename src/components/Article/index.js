import React, { Component, PropTypes} from 'react'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle, loadArticleById } from '../../AC'
import { connect } from 'react-redux'
import Loader  from '../Loader/index'
import LocalizedText from '../LocalizedText'
import './style.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        // from connect:
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    };

    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object
    };

    componentDidMount(){
        if (this.props.isOpen) {
            this.props.loadArticleById(this.props.id)
        }
    }

    render() {
        const { article, onClick } = this.props;
        const loader = article && article.loading && <Loader />;
        if(!article) return null;
        return (
            <div ref = "container">
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    <h3 onClick = {onClick}>{article.title}</h3>
                    {this.getDeleteButton()}
                    {this.getBody()}
                    {loader}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null;
        return (
            <section>
                {this.props.article.text}
                <CommentList article = {this.props.article} />
            </section>
        )
    }

    getDeleteButton() {
        if (this.props.article && !this.props.article.text) return null;
        return (<div>
            <a href="#" onClick = {this.handleDelete}><LocalizedText text="delete article"/></a>
        </div>)
    }

    handleDelete = ev => {
        ev.preventDefault();
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect(
    (state, props) => {
        return {
            article: state.articles.getIn(['entities', props.id])
        }
    }, { deleteArticle, loadArticleById }, null, {pure: false})(Article)
