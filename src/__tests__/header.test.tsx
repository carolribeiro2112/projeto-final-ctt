import React from 'react';
import {render,screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';

import Header from '../components/Header/index';

test('should renders header paragraph', () => {
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  )

  const paragraphElement = screen.getByTestId("paragraph")
  expect(paragraphElement).toBeInTheDocument()

})

test('should renders header logout link', () => {
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  )

  const LogoutElement = screen.getByTestId("logout")
  expect(LogoutElement).toBeInTheDocument()

})

