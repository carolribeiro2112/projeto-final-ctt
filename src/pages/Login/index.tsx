import React from 'react';
import {FiMail, FiLock} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container} from './styles'

const Login = () => {
  return(
    <Container>
      <h1>Login</h1>
      <div className="form">
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
      
        <Button type="submit">Login</Button>
        
      </div>
    </Container>
  ) 
}

export default Login;