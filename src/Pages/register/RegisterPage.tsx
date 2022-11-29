import React, { useState } from 'react';
import logo from './../../componentes/imagens/mangayakiLogo.png';
import ValidationError from './../../componentes/ValidationError/ValidationError';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';




function RegisterPage() {

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
    const goToInteressePage = () => {
        navigate('/interesse');
    }
    const goToHomePage = () => {
        navigate('/');
    }
    return (
        <main>
            <body>
                <img src={logo} alt='logo' className='Logoin' onClick={goToHomePage}></img>
                <section className='area-register'>
                    <div className='register'>
                        <form>
                                <h2>Nome de Usuário</h2>
                                <input type='text' placeholder='Nome de Usuário'></input>
                                <h2>E-mail</h2>
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
                            <div className="ouregister" />
                            <div className="twoouregister" />
                            <button type='button' data-testid="avanca-button" onClick={goToInteressePage}> Avançar </button>
                        </form>
                    </div>
                </section>
            </body>
        </main>
    )
}

export default RegisterPage