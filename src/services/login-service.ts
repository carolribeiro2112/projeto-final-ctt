import api from './api';

const LoginService = {
  postLogin: (login:any) => api.post('/login',login)
}

export default LoginService;