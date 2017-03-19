import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string
    };

    render() {
        const { path, name } = this.props;
        let linkName = name || path.replace(/[\/]/g,'');
        let linkNameCap = linkName[0].toUpperCase() + linkName.slice(1);

        return (
            <li>
                <Link to={path}
                      activeStyle={{color: 'red'}}
                      className="menu__link"
                      activeClassName="menu__link_active">
                    {linkNameCap}
                </Link>
            </li>
        )
    }
}

export default MenuItem