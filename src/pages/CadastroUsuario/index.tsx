import React from 'react';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import {Container, Content} from './styles';

const CadastroUsuario = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo usuário</h1>
        <input name="name" />
        <input name="email"/>
        <input name="password"/>
        <input name="role"/>
        <Button>Cadastrar usuário</Button>
      </Content>  
    </Container>
      
  )
}

export default CadastroUsuario;