import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'

class App extends Component {
    render() {
        return(

            <Provider store = {store}>
                <div>
                    <h1>News App</h1>
                    <Menu>
                        {/*<MenuItem path='/counter'/>*/}
                        <MenuItem path='/articles'/>
                        <MenuItem path='/filters'/>
                        <MenuItem path='/comments'/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default App