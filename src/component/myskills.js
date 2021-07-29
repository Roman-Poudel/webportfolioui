import React, {Component} from 'react';
import background from '../assets/image/desktop.jpg';


class Myskills extends Component {
    constructor(props) {
        super(props);

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
                        <h3>London</h3>
                        <p>London is the capital city of England.</p>
                    </div>
                    <div id="SoftSkill" className="tabcontent">
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Myskills;
