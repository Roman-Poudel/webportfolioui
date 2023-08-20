import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class Login extends Component {
    render() {
        return (
            <div className="container col-md-4 col-md-offset-4">
               <div className="box text-muted">
                   <form>
                       <div className="form-group">
                           <label htmlFor="exampleInputEmail1">Email address</label>
                           <input type="email" className="form-control" id="exampleInputEmail1"
                                  aria-describedby="emailHelp" placeholder="Enter email"/>
                               <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                   anyone else.</small>
                       </div>
                       <div className="form-group">
                           <label htmlFor="exampleInputPassword1">Password</label>
                           <input type="password" className="form-control" id="exampleInputPassword1"
                                  placeholder="Password"/>
                       </div>
                       <button type="submit" className="btn btn-primary">Submit</button>
                   </form>
               </div>
            </div>
        );
    }
}

export default Login;
