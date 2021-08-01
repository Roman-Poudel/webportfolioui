import React, {Component} from 'react';
import background from '../assets/image/desktop.jpg';


class Myskills extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.openPage('Technical');
    }
    openPage(pageName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(pageName).style.display = "block";
    }

    render() {
        return (
            <div className="container">
                <div className="box text-muted">
                    <div className="tab">
                        <button className="tablink" id="defaultOpen"
                                onClick={()=>this.openPage( 'Technical')}>Technical</button>
                        <button className="tablink" onClick={()=>this.openPage('SoftSkill')}>SoftSkill</button>
                    </div>
                    <div id="Technical" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> Technology Known</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th> Program/Technology</th>
                                            <th> Type/Language</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Programming/Markup Language</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    <li> Java </li>
                                                    <li> HTML </li>
                                                    <li> CSS </li>
                                                    <li> BOOTSTRAP </li>
                                                    <li> SQL </li>
                                                    <li> React (Library)</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Software</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    <li> Microsoft Office Suite </li>
                                                    <li> Netbeans </li>
                                                    <li> Visual Studio </li>
                                                    <li> Intellij </li>
                                                    <li> MS-Project </li>
                                                    <li> Webstorm</li>
                                                    <li> Postman</li>
                                                    <li> MS-SQL</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SVN</td>
                                            <td>Github, git</td>
                                        </tr>
                                        <tr>
                                            <td>Paradigm</td>
                                            <td>Procedural, OOP</td>
                                        </tr>
                                        <tr>
                                            <td>Framework</td>
                                            <td>Spring, Spring Boot</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('SoftSkill')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="SoftSkill" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b>Organizational Skills</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                        <tr>
                                                <td> Team Work</td>
                                                <td> Communication Skill</td>
                                        </tr>
                                        <tr>
                                            <td> Work Ethics</td>
                                            <td> Problem Solving</td>
                                        </tr>
                                        <tr>
                                            <td> Respect</td>
                                            <td> Interpersonal Skills</td>
                                        </tr>
                                        <tr>
                                            <td> Leadership Skills</td>
                                            <td> Initiator</td>
                                        </tr>
                                        <tr>
                                            <td> Fast Learner</td>
                                            <td> Keen to Learn new thing</td>
                                        </tr>
                                        <tr>
                                            <td> Flexible</td>
                                            <td> Adaptability</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Technical')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Myskills;
