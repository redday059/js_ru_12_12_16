import React, { Component, PropTypes } from 'react'
import LocalizedText from '../LocalizedText'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="menu col-xs-24 col-sm-12 pull-left">
                <div className="menu__text"><LocalizedText text=" Select path:"/></div>
                <ul className="menu__list">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default Menu