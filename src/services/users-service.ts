import api from './api';

const UsersService = {
  getUsers: () => api.get('/users?role=admin&role=editor',{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),

  postUsers: (newUser:any) => api.post('/users', newUser, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),

  deleteUsers: (id:number) => api.delete(`/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default UsersService;