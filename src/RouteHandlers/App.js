import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import dictionaries from '../dictionaries'
import LocalizedText from '../components/LocalizedText'
import Switcher from '../components/Switcher'
import Footer from '../components/Footer'

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
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <Switcher items = {['nl', 'en']} onChange={this.changeLanguage} active={this.state.language}/>
                                <h1 className="col-xs-20 pull-left title"><LocalizedText text="News App"/></h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row intro">
                            <div className="user col-xs-24 col-sm-12 pull-right">
                                <label htmlFor="user" className="user__label">
                                    <LocalizedText text="Input username:"/>
                                </label>
                                <input type="text" id="user" className="user__input" value={this.state.username} onChange={this.handleChange}/>
                            </div>
                            <Menu>
                                {/*<MenuItem path='/counter'/>*/}
                                <MenuItem path='/articles'/>
                                <MenuItem path='/filters'/>
                                <MenuItem path='/comments'/>
                            </Menu>

                        </div>
                    </div>
                    {this.props.children}
                    <Footer/>
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