import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute } from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import Counter from './components/Counter'
import ArticleListRoute from './RouteHandlers/ArticleListRoute'
import ArticleRoute from './RouteHandlers/ArticleRoute'
import Filters from './RouteHandlers/Filters'
import NotFound from './RouteHandlers/NotFound'
import CommentsRoot from './RouteHandlers/CommentsRt'
import CommentsPageRoute from './RouteHandlers/CommentsPage'
import ArticleIndexPage from './RouteHandlers/ArticleIndexPage'
import ErrorPage from './RouteHandlers/ErrorPage'

export default (
    <Router history={history}>
        <Route path='/' component={App}>
            <IndexRedirect to='articles'/>
            <Redirect from='article' to='articles'/>
            <Route path='counter' component={Counter}/>
            <Route path='articles' component={ArticleListRoute}>
                <IndexRoute component={ArticleIndexPage}/>
                <Route path='/view/:id' components={{article:ArticleRoute}}/>
                <Route path=':id' components={{article:ArticleRoute}}/>
            </Route>
            <Route path='filters' component={Filters}/>
            <Route path = 'comments' component = {CommentsRoot}>
                <IndexRedirect to='1'/>
                <Route path = ':page' component = {CommentsPageRoute} />
            </Route>
            <Route path='error' component={ErrorPage}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)
