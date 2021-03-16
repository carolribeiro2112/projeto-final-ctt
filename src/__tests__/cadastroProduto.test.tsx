import React from 'react';
import {render,screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import CadastroProdutos from '../pages/CadastroProdutos/index';
import store from '../store';

test('Page should have a button cadastrar produto', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CadastroProdutos/>
      </BrowserRouter>
    </Provider>
  )

  const buttonElement = screen.getByText("Cadastrar produto")
  expect(buttonElement).toBeInTheDocument() 
})

test('User should be able to fill all the inputs', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CadastroProdutos/>
      </BrowserRouter>
    </Provider>
  )

  const test = 'Test'
  const productPrice = 'R$ 40,00'

  const title = screen.getByPlaceholderText("Título")
  const price = screen.getByPlaceholderText("Preço R$")
  const description = screen.getByPlaceholderText("Descrição")
  const image = screen.getByPlaceholderText('Url da imagem')

  userEvent.type(title,test)
  userEvent.type(price,productPrice)
  userEvent.type(description,test)
  userEvent.type(image,test)
  
  expect(title).toHaveValue(test)
  expect(price).toHaveValue(productPrice)
  expect(description).toHaveValue(test)
  expect(image).toHaveValue(test)
})