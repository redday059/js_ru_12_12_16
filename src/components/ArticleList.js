//noinspection JSUnresolvedVariable
import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from '../decorators/accordion'

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles, accordion, openArticleId} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={openArticleId == article.id}
                         onClick={()=>accordion(article.id)}
                />
            </li>);
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

export default accordion(ArticleList);
