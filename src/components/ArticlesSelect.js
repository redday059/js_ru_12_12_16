import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { changeSelection } from '../AC'
import { connect } from 'react-redux'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles, selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Select
                    options={options}
                    value={selected}
                    onChange={this.handleChange}
                    multi={true}
                />
            </div>
        )
    }

    handleChange = selected => {
        this.props.changeSelection(selected.map(option => option.value))
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(ArticlesSelect)
