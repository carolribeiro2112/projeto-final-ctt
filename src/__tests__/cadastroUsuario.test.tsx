import React from 'react';
import {render,screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import CadastroUsuario from '../pages/CadastroUsuario/index';
import store from '../store';

test('Page should have a button cadastrar usuário', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CadastroUsuario/>
      </BrowserRouter>
    </Provider>
  )

  const buttonElement = screen.getByText("Cadastrar usuário")
  expect(buttonElement).toBeInTheDocument() 
})

test('User should be able to fill all the inputs', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CadastroUsuario/>
      </BrowserRouter>
    </Provider>
  )

  const test = 'Test'
  const userEmail = 'test@test.com'

  const name = screen.getByPlaceholderText("Nome")
  const email = screen.getByPlaceholderText("E-mail")
  const password = screen.getByPlaceholderText("Senha")
  const role = screen.getByPlaceholderText('Cargo ex: admin ou editor')

  userEvent.type(name,test)
  userEvent.type(email,userEmail)
  userEvent.type(password,test)
  userEvent.type(role,test)
  
  expect(name).toHaveValue(test)
  expect(email).toHaveValue(userEmail)
  expect(password).toHaveValue(test)
  expect(role).toHaveValue(test)
})