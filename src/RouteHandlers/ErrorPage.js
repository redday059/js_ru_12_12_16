import React, {
    Component,
    PropTypes,
} from 'react';

class ErrorPage extends Component {
    render() {
        console.log('FROM ERROR PAGE: ', this.props);
        return (
            <div className="container">
                <h1>Error Page</h1>
                <h3>{this.props.location.query.message}</h3>
            </div>
        );
    }
}

ErrorPage.propTypes = {};
ErrorPage.defaultProps = {};

export default ErrorPage;
