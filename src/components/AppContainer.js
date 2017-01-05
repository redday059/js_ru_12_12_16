import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'

function AppContainer(props) {
    return (
        <div>
            <Counter/>
            <UserForm />
            <Filters articles = {[]}/>
            <ArticleList/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer