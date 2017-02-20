import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func
    };

    state = {
        text: '',
        user: ''
    };

    static contextTypes = {
        user: PropTypes.string
    };

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            user: '',
            text: ''
        })
    };

    render() {
            return (
            <form onSubmit = {this.handleSubmit} className="comment-form">
                {/*comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>*/}
                {/*user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')} placeholder={this.context.user}/>*/}

                <label htmlFor="comment-user" className="comment-form__label">
                    Username:
                </label>
                <input type="text" id="comment-user"
                       className="comment-form__input"
                       value={this.state.user}
                       onChange = {this.handleChange('user')}
                       placeholder={this.context.user}/>
                <textarea placeholder="Leave your comment here"
                          value={this.state.text}
                          onChange = {this.handleChange('text')}
                          className="comment-form__textarea"
                          rows = "8">
                </textarea>
                <input type = "submit" className="comment-form__submit btn"/>
            </form>
        )

    }
}

export default NewCommentForm