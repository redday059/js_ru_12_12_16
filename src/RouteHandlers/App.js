import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import dictionaries from '../dictionaries'
import LocalizedText from '../components/LocalizedText'
import Switcher from '../components/Switcher'

class App extends Component {
    state = {
        username: '',
        language: 'en'
    };

    static childContextTypes = {
        user: PropTypes.string,
        dictionary: PropTypes.object
    };

    getChildContext() {
        return {
            user: this.state.username,
            dictionary: dictionaries[this.state.language]
        }
    }

    render() {
        return(
            <Provider store = {store}>
                <div>
                    <Switcher items = {['nl', 'en']} onChange={this.changeLanguage} active={this.state.language}/>
                    <h1><LocalizedText text="News App"/></h1>
                    <div>
                        <LocalizedText text="Input username"/>:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
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

    handleChange = ev => {
        if (ev.target.value.length <= 10) {
            this.setState({
                username: ev.target.value
            })
        }
    };

    changeLanguage = language => this.setState({ language })

}

export default App