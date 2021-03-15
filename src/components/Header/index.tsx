import React from 'react';
import { Container } from './styles';
import {FiLogOut} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const userName = localStorage.getItem('name')

  const handleLogout = () =>{
    localStorage.clear()
  } 

  return(
    <Container>
      <p>Seja bem-vindo(a) {userName}!</p>
      <Link to="/"><FiLogOut size={20} onClick={()=>handleLogout()}/></Link>
    </Container>
  )
}

export default Header;