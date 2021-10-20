import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';

const Register = () =>
{
    const { signUpWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) =>
    {
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>
    {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) =>
    {
        signUpWithEmail(email, password)
    }
    return (
        <Container>
            <div className="control-form mx-auto">
                <h1 className="text-center">Register</h1>
                <p className="text-center">Register to create your account</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Your password" />
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