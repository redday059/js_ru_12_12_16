import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './RouteHandlers/App'
import Counter from './components/Counter'
import ArticleListRoute from './RouteHandlers/ArticleListRoute'
import ArticleRoute from './RouteHandlers/ArticleRoute'
import Filters from './RouteHandlers/Filters'
import NotFound from './RouteHandlers/NotFound'
import CommentsRoot from './RouteHandlers/CommentsRt'
import CommentsPageRoute from './RouteHandlers/CommentsPage'

export default (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='counter' component={Counter}/>
            <Route path='articles' component={ArticleListRoute}>
                <Route path=':id' component={ArticleRoute}/>
            </Route>
            <Route path='filters' component={Filters}/>
            <Route path = "comments" component = {CommentsRoot}>
                <Route path = ":page" component = {CommentsPageRoute} />
            </Route>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)
