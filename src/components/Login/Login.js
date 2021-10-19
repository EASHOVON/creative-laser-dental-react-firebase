import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () =>
{
    return (
        <Container>
            <div className="control-form mx-auto">
                <h1 className="text-center">Sign In</h1>
                <p className="text-center">Sign In to access your account</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
                <p className="text-center">or sign in with</p>
                <div className="text-center">
                    <Button variant="warning"><GoogleIcon></GoogleIcon> Google</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;