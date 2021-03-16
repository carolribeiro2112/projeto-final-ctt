import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import toast,{ Toaster } from 'react-hot-toast';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import * as UsersActions from '../../store/ducks/users/actions';

import {Container, Content} from './styles';

const CadastroUsuario = () => {
  const {register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (newUser:any) => {
    dispatch(UsersActions.postUsersRequest(newUser))
    toast.success('Seu cadastro foi feito com sucesso')
  }

  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo usuário</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register ({required:true})} name="name" type="text" data-testid="name" placeholder="Nome"/>
          {errors.name && <p>Campo Obrigatório</p>}
          <input ref={register ({required:true})} name="email" type="text" placeholder="E-mail"/>
          {errors.email && <p>Campo Obrigatório</p>}
          <input ref={register ({required:true})} name="password" type="password" placeholder="Senha"/>
          {errors.password && <p>Campo Obrigatório</p>}
          <input ref={register ({required:true})} name="role" type="text" placeholder="Cargo ex: admin ou editor"/>
          {errors.role && <p>Campo Obrigatório</p>}
          <Button type="submit">Cadastrar usuário</Button>
        </form>
        <Toaster/>
      </Content>  
    </Container>    
  )
}

export default CadastroUsuario;