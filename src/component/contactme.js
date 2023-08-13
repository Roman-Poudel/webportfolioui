import React, {Component} from 'react';
// import axios from 'axios';

class Contactme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }
    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
    handleSubmit(e) {
        e.preventDefault();

        /*axios({
            method: "POST",
            url:"http://localhost:3000/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if(response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })*/
    }

    render() {
        return (
            <div className="container ">
                <div className="box">
                    <div className="row">
                        <div className="col col-5">
                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <input className="form-control mt-2" type="text" name="name"
                                       placeholder="Name"
                                       value={this.state.name} onChange={this.onNameChange.bind(this)}
                                />
                                <input className="form-control mt-2" type="email" name="email"
                                       placeholder="Email"
                                       value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                />
                                <textarea className="form-control mt-2" name="message"
                                          placeholder=" Please Write Your Message Here"
                                          value={this.state.message} onChange={this.onMessageChange.bind(this)}
                                />
                                <button className="btn btn-primary" type="submit">send</button>
                            </form>
                        </div>
                        <div className="col col-7">
                            <iframe title="address-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.8544904111915!2d151.00625251542832!3d-33.821238964180544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a323fabe2421%3A0xf069f56fa708b06e!2s1%2F8%20Cowper%20St%2C%20Parramatta%20NSW%202150!5e1!3m2!1sen!2sau!4v1627199508003!5m2!1sen!2sau"
                                 className="responsive-iframe"  loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactme;
