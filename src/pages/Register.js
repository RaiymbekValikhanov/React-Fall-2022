import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";
import { signup } from "../services/requests";
import './Login.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, name, pass)
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
                <h2>Регистрация</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Имя пользователя</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="username" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Пароль</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Регистрация</button>
                </form>
                {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
            </div>
        </Container>
    )
}

export default Register;