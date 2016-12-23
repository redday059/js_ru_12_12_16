import React, { Component, PropTypes } from 'react'
class AddCommentForm extends Component {
    static propTypes = {};

    state = {
        username: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} method="POST">
                <label>
                    User:
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                </label>
                <label>
                    Text:
                    <input type="text" value={this.state.text} name="text" onChange={this.handleChange}/>
                </label>
                <input disabled={!this.isValid()} type ="submit" value="Submit" />
            </form>
        );
    }


    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    };

    handleSubmit = ev => {
        ev.preventDefault();
        let messageToConsole = "User: " + this.state.username + " Text: " + this.state.text;
        console.log(messageToConsole);
    };

    isValid() {
        return this.state.username && this.state.text;
    }
}

export default AddCommentForm;
