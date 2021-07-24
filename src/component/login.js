import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class Login extends Component {
    render() {
        return (
            <div className="container justify-content-center">
                <Card className="text-center text-muted bg-light" >
                    <Card.Title>LOGIN</Card.Title>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        {/*<Form.Check type="checkbox" label="Check me out" />*/}
                        <Button className="btn btn-primary" type="submit"> LOGIN </Button>
                    </Form.Group>

                </Form>
                </Card>
            </div>
        );
    }
}

export default Login;
