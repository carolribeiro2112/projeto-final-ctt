import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as LoginActions from '../../store/ducks/login/actions';

import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg';
import LogoImg2 from '../../assets/logo2.svg';

import {Container, Logo} from './styles'
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
      <Logo>
          <img src={LogoImg2} alt=""/>
          <img src={LogoImg} alt=""/>
        </Logo>
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