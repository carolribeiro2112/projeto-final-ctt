import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';

import Sidebar from '../../components/Sidebar';
import { getProductsRequest } from '../../store/ducks/products/actions';
import { getUsersRequest } from '../../store/ducks/users/actions';
import { Container, Content, Page } from './styles';

const Home = () => {

  const amountUsers = useSelector((state:any)=> state.UsersReducer.users)
  const amountSizeUsers = amountUsers.length;
  
  const amountProducts = useSelector((state:any)=> state.ProductsReducer.beers)
  const amountSizeProducts = amountProducts.length;

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUsersRequest());
    dispatch(getProductsRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <Container>
      <Sidebar/>

      <Page>
        <Header/>
        <Content>
          <div className="quantity">
            <p>usuários: {amountSizeUsers}</p>
          </div>
          <div className="quantity">
            <p>produtos: {amountSizeProducts}</p>
          </div>
        </Content>
      </Page>

    </Container>
  )
}

export default Home;