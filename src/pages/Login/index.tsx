import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect} from "react-router-dom";

import * as LoginActions from '../../store/ducks/login/actions';

import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg';
import LogoImg2 from '../../assets/logo2.svg';

import {Container, Logo} from './styles';

const Login = () => {
  useSelector((state:any)=> state.LoginReducer.usersArray.accessToken)

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const token = localStorage.getItem('token')

  const onSubmit = (data:any) => {
    dispatch(LoginActions.postLoginRequest(data))
  }

  return(
    <Container>
      <Logo>
        <img src={LogoImg2} alt=""/>
        <img src={LogoImg} alt=""/>
      </Logo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name="email"  type="email" placeholder="E-mail"/>
        <input ref={register} name="password"  type="password" placeholder="Senha"/>
      
        <Button type="submit">Login</Button>

        {
          token && <Redirect to="/home"/>
        }
      </form>
    </Container>
  ) 
}

export default Login;