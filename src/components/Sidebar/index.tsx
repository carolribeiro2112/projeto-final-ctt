import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import LogoImg2 from '../../assets/logo2.svg';

import { Container, Logo } from './styles';

const Sidebar = () => {
  const userRole = localStorage.getItem('role')

  return (
    <Container>
      <aside>
        <Logo>
          <img src={LogoImg2} alt="Logo emporio da Cerveja"/>
          <img src={LogoImg} alt="Emporio da Cerveja"/>
        </Logo>
        <Link data-testid="home"to='/home' >Home</Link>
        {
          userRole === 'admin' && <Link data-testid="usuario" to='/users'>Usuários</Link>
        }
        <Link data-testid="products" to='/products'>Produtos</Link>
      </aside>
    </Container>
  )
}

export default Sidebar;