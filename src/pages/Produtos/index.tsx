import React from 'react';
import { Link } from 'react-router-dom';

import {FiTrash2} from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';

import {Container,Content, Card} from './styles'

const Produtos = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
      <h1>Produtos Cadastrados</h1>
        <div className="list-header">
          <p>nome</p>
          <p>preço</p>
          <p>Excluir</p>
        </div>
        <Card>
          <p>nome</p>
          <p>preço</p>
          <FiTrash2 size={20}/>
        </Card>
        <Link to="/new-product">Cadastrar novo produto</Link>
      </Content>
      
    </Container>
  )
}

export default Produtos;