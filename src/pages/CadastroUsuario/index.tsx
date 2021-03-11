import React from 'react';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content} from './styles';

const CadastroUsuario = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo usuário</h1>
        <Input name="name" />
        <Input name="email"/>
        <Input name="password"/>
        <Input name="role"/>
        <Button>Cadastrar usuário</Button>
      </Content>  
    </Container>
      
  )
}

export default CadastroUsuario;