import React, { useEffect } from 'react';
import {FiTrash2} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { deleteProductsRequest, getProductsRequest } from '../../store/ducks/products/actions';
import { Products } from '../../store/ducks/products/types';

import {Container,Content, Card, Page, CardEditor} from './styles';

const Produtos = () => {
  const userRole = localStorage.getItem('role')

  const dispatch = useDispatch();

  const beerState = useSelector((state:any) => state.ProductsReducer.beers);

  useEffect(() => {
    dispatch(getProductsRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteProduct = (id:number) => {
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
            beerState?.map((item:Products)=>(
              <CardEditor key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>             
              </CardEditor>
            ))
          }


          {
            userRole === 'admin' && (
              
                beerState?.map((item:Products)=>(
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