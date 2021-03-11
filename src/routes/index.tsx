import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Usuarios from '../pages/Usuarios';
import Produtos from '../pages/Produtos';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/users" exact component={Usuarios}/>
      <Route path="/products" exact component={Produtos}/>
    </Switch>
  )
}

export default Routes;