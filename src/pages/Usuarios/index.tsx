import React, { useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';


import Sidebar from '../../components/Sidebar';
import { deleteUsersRequest, getUsersRequest } from '../../store/ducks/users/actions';
import { Users } from '../../store/ducks/users/types';

import {Container, Content, Card, Page} from './styles';

const Usuarios = () => {
  const dispatch= useDispatch()

  const userState = useSelector((state:any)=> state.UsersReducer.users)

  useEffect(() => {
    dispatch(getUsersRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const deleteUser = (id:number) => {
    try{
      dispatch(deleteUsersRequest(id));
    }catch(err) {
      console.log(err)
    }
    dispatch(getUsersRequest());
  }

  return(
    <Container>
      <Sidebar/>
      <Page>
        <Header/>
        <Content>
          <h1>Usuários Cadastrados</h1>
          <div className="list-header">
            <p>Nome</p>
            <p>Cargo</p>
            <p>Excluir</p>
          </div>
          {
            userState?.map((item:Users)=> (
              <Card key={item.id}>
                <p>{item.name}</p>
                <p>{item.role}</p>
                <FiTrash2 size={20} onClick={() => deleteUser(item.id)}/>
              </Card>
            ))
          }
          
          <div className='link'>
            <Link to="new-user">Cadastrar novo usuário</Link>
          </div>
        </Content>
      </Page>
      
    </Container>
  )
}

export default Usuarios;