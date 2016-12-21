//decorator === HOC(Higher Order Component)
import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openItemId: null
        };

        render() {
            return <Component {...this.props} toggleItem = {this.toggleItem} isItemOpen = {this.isItemOpen}/>
        }

        toggleItem = id => ev => this.setState({
            openItemId: !this.isItemOpen(id) ? id : null
        });

        isItemOpen = id => this.state.openItemId == id;
    }
}


