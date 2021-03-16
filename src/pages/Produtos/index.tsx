import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar';

import {FiTrash2} from 'react-icons/fi';
import {Container,Content, Card, Page, CardEditor} from './styles';
import { deleteProductsRequest, getProductsRequest } from '../../store/ducks/products/actions';
import Header from '../../components/Header';

const Produtos = () => {
  const userRole = localStorage.getItem('role')

  const dispatch = useDispatch();

  const beerState = useSelector((state:any) => state.ProductsReducer.beers);

  useEffect(() => {
    dispatch(getProductsRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteProduct = (id:any) => {
    try{
      dispatch(deleteProductsRequest(id));
    } catch (err){
      console.log(err)
    }
    
    dispatch(getProductsRequest());
  }

  return(
    <Container>
      <Sidebar/>
      <Page>
        <Header/>
        <Content>
        <h1>Produtos Cadastrados</h1>
          {
              userRole === 'admin' && (
              <div className="list-header">
                <p>Nome</p>
                <p>Preço</p>
                <p>Excluir</p>
              </div>
            )
          }
          {
            userRole === 'editor' && (
              <div className="list-header-editor">
                <p>Nome</p>
                <p>Preço</p>            
              </div>
            )
          }
          

          {
            userRole==='editor' &&
            beerState?.map((item:any)=>(
              <CardEditor key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>             
              </CardEditor>
            ))
          }


          {
            userRole === 'admin' && (
              
                beerState?.map((item:any)=>(
                  <Card key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <FiTrash2 size={20} onClick={()=>deleteProduct(item.id)}/>                
                  </Card>
                ))              
            )
          }
          
          <div className='link'>
            <Link to="/new-product">Cadastrar novo produto</Link>
          </div>
        </Content>
      </Page>

    </Container>
  )
}

export default Produtos;