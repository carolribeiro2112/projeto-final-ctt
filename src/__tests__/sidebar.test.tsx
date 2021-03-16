import React from 'react';
import {render,screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
  
  test('should have a link element called home', ()=>{
    render(
      <BrowserRouter>
        <Sidebar/>
      </BrowserRouter>
    )

      const linkElement = screen.getByTestId("home");
      expect(linkElement).toBeInTheDocument()
  })

  test('should have a link called Produtos', ()=>{
   render(
    <BrowserRouter>
      <Sidebar/>
    </BrowserRouter>
   ) 

      const linkElement = screen.getByTestId("products");
      expect(linkElement).toBeInTheDocument()
  })

  test('admin user should see a link called usuarios', () =>{
    localStorage.setItem('role', 'admin')
    render(
      <BrowserRouter>
        <Sidebar/>
      </BrowserRouter>
    )
    
    const linkUsersElement = screen.getByTestId('usuario')
    expect(linkUsersElement).toBeInTheDocument()

  })


  