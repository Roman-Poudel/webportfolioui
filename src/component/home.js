import React, {Component} from 'react';
import me from '../assets/image/me.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            color: "#282c34",
            /*backgroundImage: `url(${me})`,
            height: "50%",
            backgroundRepeat: "repeat"*/
        }
    }
    render() {
        return (
            <div className="container">
                <div className="box text-light text-muted ">
                    <h1>hello world</h1>
                    <h2> hello world </h2>
                    <h3>hello world</h3>
                    <h4>hello world</h4>
                    <h5>hello world</h5>
                    <h1>hello world</h1>
                    <h2> hello world </h2>
                    <h1>hello world</h1>
                    <h2> hello world </h2>
                    <h3>hello world</h3>
                    <h4>hello world</h4>
                    <h5>hello world</h5>
                    <h1>hello world</h1>
                    <h2> hello world </h2>

                </div>



            </div>
        );
    }
}

export default Home;
