import React, {Component} from 'react';

class Pagenotfound extends Component {
    render() {
        return (
            <div className="Pagenotfound">
                <h1>The page you are looking for is not available!!!</h1>
                <i className="fa fa-exclamation-triangle fa-3x f text-danger">Please check the url.</i>
            </div>
        );
    }
}

export default Pagenotfound;
