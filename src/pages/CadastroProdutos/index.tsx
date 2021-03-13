import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import * as ProductsActions from '../../store/ducks/products/actions';

import {Container, Content} from './styles';

const CadastroProdutos = () => {
  
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()

  
  const onSubmit = (newBeer:any) => {
    dispatch(ProductsActions.postProductsRequest(newBeer))
  }

  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo produto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} name="title" type="text" placeholder="título"/>
          <input ref={register} name="price" type="text" placeholder="preço"/>
          <input ref={register} name="description" type="text" placeholder="descrição"/>
          <input ref={register} name="image" type="text" placeholder="url da imagem"/>
          <Button type="submit">Cadastrar produto</Button>
        </form>
          
      </Content>  
    </Container>
  )
}

export default CadastroProdutos;