import React, { useState } from 'react';
import logo from './../../componentes/imagens/mangayakiLogo.png';
import './LoginPage.css';
import { isEmailValid } from './../../componentes/helpers/EmailHelper';
import ValidationError from './../../componentes/ValidationError/ValidationError';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [form, setForm] = useState({
        email: {
            hasChanged: false,
            value: ""
        },
        password: {
            hasChanged: false,
            value: ""
        }
    })

    const navigate = useNavigate();
    const goToRegisterPage = () => {
        navigate('/register');
    }
    const goToHomePage = () => {
        navigate('/');
    }
    return (
        <main>
            <body>
                <img src={logo} alt='logo' className='Logoin' onClick={goToHomePage}></img>
                <section className='area-login'>
                    <div className='login'>
                        <form>
                            <h2>Login</h2>
                            <input type='email' placeholder='E-mail' value={form.email.value}
                                onChange={event => setForm({
                                    ...form, email: {
                                        hasChanged: true, value: event.target.value
                                    }
                                })}
                                data-testid='email' />
                            <ValidationError
                                hasChanged={form.email.hasChanged}
                                erroMessage='Email é obrigatório'
                                testId='email-required' type='required'
                                value={form.email.value} />

                            <ValidationError
                                hasChanged={form.email.hasChanged}
                                erroMessage='Email é inválido'
                                testId='email-invalid' type='email'
                                value={form.email.value} />

                            <h2>Senha</h2>
                            <input type='password' placeholder='Senha' value={form.password.value}
                                onChange={event => setForm({
                                    ...form, password: {
                                        hasChanged: true, value: event.target.value
                                    }
                                })}
                                data-testid="password" /><br></br>

                            <ValidationError
                                hasChanged={form.password.hasChanged}
                                erroMessage='Senha é obrigatória'
                                testId='password-required' type='required'
                                value={form.password.value} />

                            <button className="recuperar" data-testid="recover-password-button"
                                disabled={!isEmailValid(form.email.value)}>
                                Esqueceu sua senha?</button>

                            <div className="ou" />
                            <div className="outxt"><p>OU</p></div>
                            <div className="twoou" />

                            <button type='button'
                                data-testid="login-button"
                                disabled={!isEmailValid(form.email.value) || !form.password.value}> Entrar</button>
                            <button type='button' data-testid="register-button"
                                onClick={goToRegisterPage}> Criar nova conta</button>
                        </form>
                    </div>
                </section>
            </body>
        </main >
    );
}

export default LoginPage;
