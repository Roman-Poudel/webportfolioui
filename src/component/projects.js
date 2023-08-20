import React, {Component} from 'react';
import '../assets/css/innertabs.css';

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    openPage(pageName){
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
    componentDidMount() {
        this.openPage('University');
    }

    render() {
        return (
            <div className="container">
                <div className="box text-muted">
                    <div className="tab">
                        <button className="tablink" id="defaultOpen"
                                onClick={()=>this.openPage( 'University')}>University</button>
                        <button className="tablink" onClick={()=>this.openPage('Ongoing')}>Ongoing</button>
                        <button className="tablink" onClick={()=>this.openPage('Completed')}>Completed</button>
                        <button className="tablink" onClick={()=>this.openPage('Other')}>Other</button>
                    </div>
                    <div id="University" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> University Projects</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th> Project Name</th>
                                            <th> Technology Used</th>
                                            <th> Role</th>
                                            <th> File or Link </th>
                                            <th> Submitted To</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td> Library Management System</td>
                                            <td> C Language</td>
                                            <td> Design, Code, Document and Present</td>
                                            <td>
                                                <a href="https://github.com/Roman-Poudel/LMS-C">Library Management System (Using C)</a>
                                            </td>
                                            <td>Pokhara University</td>
                                        </tr>
                                        <tr>
                                            <td>Online Conference Management System</td>
                                            <td>Java, SQL, JPA, SPRING, THYMELEAF, HTML, CSS</td>
                                            <td>Design, Code,Document and Present </td>
                                            <td><a href="https://github.com/Roman-Poudel/CQUProject/tree/development">OCMS</a></td>
                                            <td>Central Queensland University</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Ongoing')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="Ongoing" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> Working Projects</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th> Project Name</th>
                                            <th> Technology Used</th>
                                            <th> Role</th>
                                            <th> File or Link </th>
                                            <th> Submitted To</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td> Web Portfolio</td>
                                            <td>React, css BootStrap, HTML</td>
                                            <td>Design, Develop and Deploy</td>
                                            <td><a href="https://github.com/Roman-Poudel/webportfolioui/tree/development">
                                                Roman-Poudel/webportfolioui
                                            </a></td>
                                            <td>Github</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Completed')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="Completed" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> Completed Projects</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th> Project Name</th>
                                            <th> Technology Used</th>
                                            <th> Role</th>
                                            <th> File or Link </th>
                                            <th> Submitted To</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Ongoing')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="Other" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> New ideas</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th> Project Name</th>
                                            <th> Technology Proposed</th>
                                            <th> Role </th>
                                            <th> File or Link </th>
                                            <th> Submitted To</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Ongoing')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
