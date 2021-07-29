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
                        <h3>London</h3>
                        <p>London is the capital city of England.</p>
                    </div>
                    <div id="Ongoing" className="tabcontent">
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                    <div id="Completed" className="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                    <div id="Other" className="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Other city of Japan.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
