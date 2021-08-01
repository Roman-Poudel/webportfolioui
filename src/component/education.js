import React, {Component} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        this.openPage('Masters');
    }

    openPage(pageName) {
        let i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        document.getElementById(pageName).style.display = "block";


    }
    render() {
        return (
            <div className="container">
                <div className="box text-muted">
                    {/*Tab Links*/}
                    <div className="tab">
                        <button className="tablink" id="defaultOpen" onLoad={()=>this.openPage( 'Masters')}
                                onClick={()=>this.openPage( 'Masters')}>Masters</button>
                        <button className="tablink" onClick={()=>this.openPage('Bachelor')}>Bachelor</button>
                        <button className="tablink" onClick={()=>this.openPage('HighSchool')}>High School</button>
                    </div>
                    {/*Tab information*/}
                    <div id="Masters" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b>Master of Information Technology</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr >
                                            <td><a className="text-decoration-none" href="https://www.cqu.edu.au">Central Queensland University</a></td>
                                            <td>2018-2020</td>
                                        </tr>
                                        <tr >
                                            <td colSpan="2">Sydney, Australia</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Major</td>
                                            <td>Software Design and Developement</td>
                                        </tr>
                                        <tr>
                                            <td>Minor</td>
                                            <td> Networks and Information Security </td>
                                        </tr>
                                        <tr>
                                            <td>GPA</td>
                                            <td>5.86/7</td>
                                        </tr>
                                        <tr>
                                            <td>Key Subjects</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    <li> Java </li>
                                                    <li> Data Structure and Algorithm </li>
                                                    <li> Software Engineering </li>
                                                    <li> Database Design and Development </li>
                                                    <li> Project Management Concept </li>
                                                    <li> Network Routing and Switching</li>
                                                    <li> Information Security and Management</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Bachelor')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="Bachelor" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b>Bachelor of Computer Application</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr >
                                            <td><a className="text-decoration-none" href="https://www.pu.edu.np">Pokhara University</a></td>
                                            <td>2012-2016</td>
                                        </tr>
                                        <tr >
                                            <td colSpan="2">Pokhara, Nepal</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Major</td>
                                            <td>Software Developement</td>
                                        </tr>
                                        <tr>
                                            <td>Minor</td>
                                            <td> Organization Management and Administration </td>
                                        </tr>
                                        <tr>
                                            <td>GPA</td>
                                            <td>3.03/4</td>
                                        </tr>
                                        <tr>
                                            <td>Key Subjects</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    <li> Java C C++ </li>
                                                    <li> Web Technology (HTML CSS JavaScript JSP PHP)</li>
                                                    <li> Data Structure and Algorithm </li>
                                                    <li> Software Engineering </li>
                                                    <li> Database Design and Development (SQL, PLSQL) </li>
                                                    <li> System Analysis and Design</li>
                                                    <li> Mathematics </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('HighSchool')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                    <div id="HighSchool" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b> HSEB (10+2 Management )</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr >
                                            <td><a className="text-decoration-none" href="#">Higher Secondary Education Board</a></td>
                                            <td>2010-2012</td>
                                        </tr>
                                        <tr >
                                            <td colSpan="2">Kathmandu, Nepal</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Major</td>
                                            <td>Computer Science</td>
                                        </tr>
                                        <tr>
                                            <td>Minor</td>
                                            <td> -- </td>
                                        </tr>
                                        <tr>
                                            <td>Key Subjects</td>
                                            <td>
                                                <ul className="list-unstyled">
                                                    <li>Computer Science (C Language)</li>
                                                    <li> Mathematics </li>
                                                    <li> Economics </li>
                                                    <li> Accountancy </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a onClick={()=>this.openPage('Masters')} className="btn btn-primary">Next</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Education;
