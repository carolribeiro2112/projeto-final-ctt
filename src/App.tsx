import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';

import useLogged from './hooks/useLogged';

function App() {
  const isLogged = useLogged();

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes/>
          {isLogged ? <Redirect to='/home'/> : <Redirect to='./'/>}
        </BrowserRouter>
      </Provider>
      <GlobalStyle/> 
    </div>
  );
}

export default App;
