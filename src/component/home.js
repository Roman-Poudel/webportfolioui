import React, {Component} from 'react';
import me from '../assets/image/me.jpg';
import desktop from '../assets/image/desktop.jpg';
import profile from '../assets/image/profile.png';
import home from '../assets/css/home.css';
import background from "../assets/image/desktop.jpg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            color: "#282c34",
            backgroundImage: `url(${desktop})`,
            height: "50%",
            backgroundRepeat: "repeat"
        }
    }
    render() {
        return (
            <div className="container">
                <div className=" box text-muted">
                    <div className="row">
                        {/*Left Small Menu bar*/}
                        <div className="col col-3 ">
                            <div className="split left">
                                <div className="centered">
                                    <div>
                                        <img className="img-fluid" src={me} alt="My Image"/>
                                        <h3>Roman Poudel</h3>
                                    </div>
                                    <div className="container col-md-4 col-md-offset-4">
                                        <div className="icon-bar">
                                            <a href="#"><i className="fa fa-facebook text-info"></i></a>
                                            <a href="#"><i className="fa fa-linkedin text-info"></i></a>
                                            <a href="#"><i className="fa fa-github text-black-50"></i></a>
                                            <a href="#"><i className="fa fa-twitter text-info"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Right column Description*/}
                        <div className="col col-9 ">
                            <div className="right ">
                                {/*<div>
                                    <h4>You need to know about me.</h4>
                                    <img src={profile} className="responsive-image"
                                         style={{border:"none", align:"right",
                                             overflow:"hidden"}}></img>
                                    <h1>Hello</h1>
                                    <p>I'm Roman Poudel</p>
                                    <p>An information technology Graduate</p>
                                </div>*/}
                                <div className="card text-muted">
                                    <img src={profile} className="card-img"
                                         style={{opacity:"50%",
                                             backgroundColor:"whitesmoke"}}
                                         alt="Background Image"/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title"><h4>You need to know about me.</h4></h5>
                                        <p className="card-text text-dark text-muted">
                                            I am a very passionate individual, driven and motivated.
                                            I like to work as part of a team and take on any task I may encounter.
                                            My long term objective is to become the best in whatever I do.
                                            My short term aim is to gain enough experience in the workplace
                                            to pursue a career in Information Technology. From there I wish to move
                                            into a position where I can use my knowledge and experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
