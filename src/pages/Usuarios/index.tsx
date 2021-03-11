import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import Sidebar from '../../components/Sidebar';

import {Container, Content, Card} from './styles';

const Usuarios = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Usuários Cadastrados</h1>
        <div className="list-header">
          <p>Nome</p>
          <p>Role</p>
          <p>Excluir</p>
        </div>
        <Card>
          <p>jeniffer</p>
          <p>admin</p>
          <FiTrash2 size={20}/>
        </Card>
        <Link to="new-user">Cadastrar novo usuário</Link>
      </Content>
    </Container>
  )
}

export default Usuarios;