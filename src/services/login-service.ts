import api from './api';

const LoginService = {
  postLogin: (login:any) => api.post('/login',login),

  postLoginId:(id:any) => api.get(`/users/${id}`)
}

export default LoginService;