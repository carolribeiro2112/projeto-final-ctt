import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Usuarios from '../pages/Usuarios';
import Produtos from '../pages/Produtos';
import CadastroProdutos from '../pages/CadastroProdutos';
import CadastroUsuario from '../pages/CadastroUsuario';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/users" exact component={Usuarios}/>
      <Route path="/products" exact component={Produtos}/>
      <Route path="/new-product" exact component={CadastroProdutos}/>
      <Route path="/new-user" exact component={CadastroUsuario}/>
    </Switch>
  )
}

export default Routes;