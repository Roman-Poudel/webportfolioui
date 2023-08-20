import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                <h1>Something Went Wrong</h1>
                <i className="fa fa-exclamation fa-3x f text-danger">Please check the url.</i>
            </div>
        );
    }
}

export default Error;
