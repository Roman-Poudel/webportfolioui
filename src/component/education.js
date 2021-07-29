import React, {Component} from 'react';

class Education extends Component {
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
                                onClick={()=>this.openPage( 'Masters')}>Masters</button>
                        <button className="tablink" onClick={()=>this.openPage('Bachelor')}>Bachelor</button>
                        <button className="tablink" onClick={()=>this.openPage('HighSchool')}>High School</button>
                    </div>
                    <div id="Masters" className="tabcontent">
                        <h3>London</h3>
                        <p>London is the capital city of England.</p>
                    </div>
                    <div id="Bachelor" className="tabcontent">
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                    <div id="HighSchool" className="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Education;
