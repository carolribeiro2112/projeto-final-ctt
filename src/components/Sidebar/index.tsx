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
          <img src={LogoImg2} alt=""/>
          <img src={LogoImg} alt=""/>
        </Logo>
        <Link to='/home'>Home</Link>
        {
          userRole === 'admin' && <Link to='/users'>Usuários</Link>
        }
        <Link to='/products'>Produtos</Link>
      </aside>
    </Container>
  )
}

export default Sidebar;