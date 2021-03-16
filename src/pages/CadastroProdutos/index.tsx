import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import toast,{ Toaster } from 'react-hot-toast';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';

import * as ProductsActions from '../../store/ducks/products/actions';

import {Container, Content} from './styles';

const CadastroProdutos = () => {
  
  const {register, handleSubmit, errors} = useForm()
  const dispatch = useDispatch()

  
  const onSubmit = (newBeer:any) => {
    dispatch(ProductsActions.postProductsRequest(newBeer))
    toast.success('Seu cadastro foi feito com sucesso')
  }

  return(
    <Container>
      <Sidebar/>
      <Content>
        <h1>Cadastrar novo produto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register ({required:true})} name="title" type="text" placeholder="Título"/>
          {errors.title && <p>Campo obrigatório</p>}
          <input ref={register ({required:true})} name="price" type="text" placeholder="Preço R$"/>
          {errors.price && <p>Campo obrigatório</p>}
          <input ref={register ({required:true})} name="description" type="text" placeholder="Descrição"/>
          {errors.description && <p>Campo obrigatório</p>}
          <input ref={register ({required:true})} name="image" type="text" placeholder="Url da imagem"/>
          {errors.image && <p>Campo obrigatório</p>}
          <Button type="submit">Cadastrar produto</Button>
        </form>
          
      </Content>  
      <Toaster/>
    </Container>
  )
}

export default CadastroProdutos;