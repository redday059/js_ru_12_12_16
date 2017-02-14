import React, { Component, PropTypes } from 'react'
import LocalizedText from '../LocalizedText'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="menu col-xs-24 col-md-12">
                <h3><LocalizedText text=" Select path"/></h3>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default Menu