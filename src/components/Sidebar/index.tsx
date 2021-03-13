import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Sidebar = () => {
  const userRole = localStorage.getItem('role')

  return (
    <Container>
      <aside>
        <h2>Dashboard</h2>
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