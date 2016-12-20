//decorator === HOC(Higher Order Component)
import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        };
        render() {
            return <Component {...this.props} {...this.state} accordion = {(id)=>this.accordion(id)}/>
        }

        accordion(id) {
            this.setState({
                openArticleId: id !== this.state.openArticleId ? id : null
            })
        }

    }
}


