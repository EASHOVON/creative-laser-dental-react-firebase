import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () =>
{
    const { signInUsingGoogle, user, signInUserWithEmail } = useAuth();
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
        e.preventDefault();
        signInUserWithEmail(email, password)
    }
    return (
        <Container onSubmit={handleSubmit}>
            <div className="control-form mx-auto">
                <h1 className="text-center">Sign In</h1>
                <p className="text-center">Sign In to access your account</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
                <p className="text-center">or sign in with</p>
                <div className="text-center">
                    <Button onClick={signInUsingGoogle} variant="warning"><GoogleIcon></GoogleIcon> Google</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;