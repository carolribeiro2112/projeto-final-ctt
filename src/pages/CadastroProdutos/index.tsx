import React from 'react';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content} from './styles';

const CadastroProdutos = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo produto</h1>
        <Input name="title" />
        <Input name="price"/>
        <Input name="description"/>
        <Input name="image"/>
        <Button>Cadastrar produto</Button>
      </Content>  
    </Container>
  )
}

export default CadastroProdutos;