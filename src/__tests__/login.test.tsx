import React from 'react';
import {render,screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import Login from '../pages/Login/index';
import store from '../store';

test('login page should have an input called e-mail', ()=>{
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </Provider>
  )

  const inputEmail = screen.getByPlaceholderText("E-mail")
  expect(inputEmail).toBeInTheDocument()
})

test('login page should have an input called senha', ()=>{
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </Provider>
  )

  const inputSenha = screen.getByPlaceholderText("Senha")
  expect(inputSenha).toBeInTheDocument()
})

test('login page should have a button', ()=>{
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </Provider>
  )

  const buttonElement = screen.getByText("Login")
  expect(buttonElement).toBeInTheDocument() 
})


test('user should be able to fill all the inputs', ()=>{
  const test = 'Test'
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </Provider>
  )

  const email = screen.getByPlaceholderText("E-mail")
  const password = screen.getByPlaceholderText("Senha")

  userEvent.type(email,test)
  userEvent.type(password,test)

  expect(email).toHaveValue(test)
  expect(password).toHaveValue(test)

})
