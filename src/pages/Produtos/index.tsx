import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar';

import {FiTrash2} from 'react-icons/fi';
import {Container,Content, Card} from './styles'
import { deleteProductsRequest, getProductsRequest } from '../../store/ducks/products/actions';

const Produtos = () => {
  const dispatch = useDispatch();

  const beerState = useSelector((state:any) => state.ProductsReducer.beers);

  useEffect(() => {
    dispatch(getProductsRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteProduct = (id:any) => {
    try{
      dispatch(deleteProductsRequest({id}));
    } catch (err){
      console.log(err)
    }
    
    dispatch(getProductsRequest);
  }

  return(
    <Container>
      <Sidebar/>
      <Content>
      <h1>Produtos Cadastrados</h1>
        <div className="list-header">
          <p>nome</p>
          <p>preço</p>
          <p>Excluir</p>
        </div>
        {
          beerState.map((item:any)=>(
            <Card key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <FiTrash2 size={20} onClick={()=>deleteProduct(item.id)}/>
            </Card>
          ))
        }
        
        <Link to="/new-product">Cadastrar novo produto</Link>
      </Content>
      
    </Container>
  )
}

export default Produtos;