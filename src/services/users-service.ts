import api from './api';

const UsersService = {
  getUsers: () => api.get('/users?role=admin&role=editor',{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
}

export default UsersService;