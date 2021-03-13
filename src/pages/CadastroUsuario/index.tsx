import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import * as UsersActions from '../../store/ducks/users/actions';

import {Container, Content} from './styles';

const CadastroUsuario = () => {
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()

  const onSubmit = (newUser:any) => {
    dispatch(UsersActions.postUsersRequest(newUser))
  }

  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo usuário</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} name="name" type="text" placeholder="name"/>
          <input ref={register} name="email" type="text" placeholder="email"/>
          <input ref={register} name="password" type="password" placeholder="senha"/>
          <input ref={register} name="role" type="text" placeholder="role"/>
          <Button type="submit">Cadastrar usuário</Button>
        </form>
      </Content>  
    </Container>    
  )
}

export default CadastroUsuario;