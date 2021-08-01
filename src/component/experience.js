import React, {Component} from 'react';

class Experience extends Component {
    componentDidMount() {
        this.openPage('Experience');
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
                <div className="box">
                    {/*Tab Links*/}
                    <div className="tab">
                        <button className="tablink" id="defaultOpen" onLoad={()=>this.openPage( 'Experience')}
                                onClick={()=>this.openPage( 'Masters')}>Masters</button>
                    </div>
                    {/*Tab information*/}
                    <div id="Experience" className="tabcontent">
                        <div className="card text-center">
                            <div className="card-header"><b>Working Experience</b></div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <td>Job Title</td>
                                            <td>Duration</td>
                                            <td>Responsibilities</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr >
                                            <td>Support Engineer</td>
                                            <td>2017-2017</td>
                                            <td> Deploy Software, Training, Manual Testing of Software</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Experience;
