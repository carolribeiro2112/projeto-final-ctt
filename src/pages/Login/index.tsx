import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as LoginActions from '../../store/ducks/login/actions';

import Button from '../../components/Button';

import {Container} from './styles'
import { Redirect } from 'react-router';

const Login = () => {
  const [authorized, setAutorized] = useState<Boolean>(false)
  const [refresh, setRefresh] = useState(true)

  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()

  const checkToken = () => {
    const token = localStorage.getItem('token')

    if(token) {
      setAutorized(true)
    }
    setRefresh(!refresh)
  }

  const onSubmit = (data:any) => {
    dispatch(LoginActions.postLoginRequest(data))

    checkToken();
  }

  return(
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name="email"  type="text" placeholder="E-mail"/>
        <input ref={register} name="password"  type="password" placeholder="Senha"/>
      
        <Button type="submit">Login</Button>
        
        {
          authorized ? <Redirect to="/home"/> : <Redirect to="/"/>
        }
      </form>
    </Container>
  ) 
}

export default Login;