import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () =>
{
    return (
        <Container>
            <div className="control-form mx-auto">
                <h1 className="text-center">Register</h1>
                <p className="text-center">Register to create your account</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat Your password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className="text-center">Already have an account? <Link to="/login">Sign In</Link></p>
                <p className="text-center">or sign in with</p>
                <div className="text-center">
                    <Button variant="warning"><GoogleIcon></GoogleIcon> Google</Button>
                </div>
            </div>
        </Container>
    );
};

export default Register;