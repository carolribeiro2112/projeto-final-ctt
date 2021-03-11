import React from 'react';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import {Container, Content} from './styles';

const CadastroProdutos = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo produto</h1>
        <input name="title" />
        <input name="price"/>
        <input name="description"/>
        <input name="image"/>
        <Button>Cadastrar produto</Button>
      </Content>  
    </Container>
  )
}

export default CadastroProdutos;