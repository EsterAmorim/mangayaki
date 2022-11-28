import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import RegisterPage from '../register/RegisterPage';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Login', () => {
    //validador de email
    test('given email, when empty, then show required error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");
        await userEvent.clear(email);

        const requiredError = screen.queryByTestId('email-required');
        expect(requiredError).not.toBeNull();
    })

    test('given email, when has value, then hiden required error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");

        const requiredError = screen.queryByTestId('email-required');
        expect(requiredError).toBeNull();
    })

    test('given email, when field not changed, then hiden required error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);
        
        const requiredError = screen.queryByTestId('email-required');
        expect(requiredError).toBeNull();
    })

    test('given email, when invalid, then show invalid error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");

        const requiredError = screen.queryByTestId('email-invalid');
        expect(requiredError).not.toBeNull();
    })

    //validador de senha
    test('given password, when empty, then show required error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const password = screen.getByTestId('password');

        await userEvent.type(password, "anyValue");
        await userEvent.clear(password);

        const requiredError = screen.queryByTestId('password-required');
        expect(requiredError).not.toBeNull();
    })

    test('given password, when has value, then hide required error message', async () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const password = screen.getByTestId('password');

        await userEvent.type(password, "anyValue");

        const requiredError = screen.queryByTestId('password-required');
        expect(requiredError).toBeNull();
    })

    test('given email, when empty, then disable recover password button', () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const recoverPasswordButton = screen.getByTestId('recover-password-button')

        expect(recoverPasswordButton).toBeDisabled();
    })

    test('given email, when valid, then enable recover password button', () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const email = screen.getByTestId('email');
        userEvent.type(email, "valid@email.com");

        const recoverPasswordButton = screen.getByTestId('recover-password-button')

        expect(recoverPasswordButton).not.toBeDisabled();
    })

    test('given form invalid, then disable login button', () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const loginButton = screen.getByTestId('login-button');

        expect(loginButton).toBeDisabled();
    })

    test('given form valid, then ensable login button', () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);

        const email = screen.getByTestId('email');
        userEvent.type(email, "valid@email.com");

        const password = screen.getByTestId('password');
        userEvent.type(password, "anyValue");

        const loginButton = screen.getByTestId('login-button');

        expect(loginButton).not.toBeDisabled();
    })

    test('given user clicks on register button, then go to register page', async () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        );
        const registerButton = screen.getByTestId('register-button');
        await userEvent.click(registerButton);

        expect(window.location.pathname).toEqual('/register');
    })

})