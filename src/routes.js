import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './RouteHandlers/App'
import Counter from './components/Counter'
import ArticleListRoute from './RouteHandlers/ArticleListRoute'
import Filters from './RouteHandlers/Filters'
import ArticleRoute from './RouteHandlers/ArticleRoute'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='counter' component={Counter}/>
            <Route path='articles' component={ArticleListRoute}>
                <Route path=':id' component={ArticleRoute}/>
            </Route>
            <Route path='filters' component={Filters}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)