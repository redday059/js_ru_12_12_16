import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { mapToArray } from '../helpers'
import { loadAllArticles } from '../AC'
import Loader from './Loader/index'
import LocalizedText from './LocalizedText'

class ArticleList extends React.Component {
    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const {articles, loading, isOpenItem, toggleOpenItem} = this.props;
        const articleElements = articles.filter(article => article.id).map(article =>
            <li key={article.id} className="article-list__article col-xs-24 col-sm-8 col-md-4 blue">
                <Link to={`/articles/${article.id}`}
                      className="article-list__link"
                      activeStyle={{color: 'red'}}
                      activeClassName="article-list__link_active">{article.title}
                </Link>
                <div className="article-list__link-wrapper">
                    <div className="article-list__link-text">{article.title}</div>
                </div>
            </li>);
        const loader = loading && <Loader />;
        return (
            <div>
                <h2><LocalizedText text="Article List" /></h2>
                <ul className="row article-list">
                    {articleElements}
                </ul>
                {loader}
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
};

export default connect(
    (state) => {
        const articles = mapToArray(state.articles.entities);
        const { filters } = state;
        const { selected } = filters;
        const { from, to } = filters.dateRange;
        const filteredArticles = articles.filter(article => {
            const published = Date.parse(article.date);
            return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        });
        return {
            articles: filteredArticles,
            loading: state.articles.loading
        }
    }, { loadAllArticles }, null, {pure: false})(accordion(ArticleList))
