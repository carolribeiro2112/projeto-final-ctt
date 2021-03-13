import api from './api';

const ProductsService = {
  getProducts: () => api.get('/beers', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),

  postProducts: (newBeer:any) => api.post('/beers', newBeer, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),

  deleteProducts: (id:any) => api.delete(`/beers/${id}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default ProductsService;