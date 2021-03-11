import React from 'react';

import Sidebar from '../../components/Sidebar';
import { Container } from './styles';

const Home = () => {
  return(
    <Container>
      <Sidebar/>
      <div>
        <p>usuários: 60</p>
        <p>produtos: 100</p>
      </div>
    </Container>
  )
}

export default Home;