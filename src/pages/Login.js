import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Label, Message, Segment } from "semantic-ui-react";
import Cookies from "universal-cookie";
import { singin } from "../services/requests";
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')

        singin(email, pass)
            .then(res => {
                if (res.status == 200) {
                    navigate('/Профиль')   
                    return {error: ''}
                } else {
                    return res.json()
                }
            })
            .then(body => {
                setError(body.error)
            })
        
    }

    return (
        <Container className="auth-container">
            {error && <Message negative>{error}</Message>}
            <div className="auth-form-container">
                <h2>Вход</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Пароль</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Вход</button>
                </form>
                {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
            </div>
        </Container>
    )
}

export default Login;