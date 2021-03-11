import React from 'react';

import Sidebar from '../../components/Sidebar';
import { Container, Content } from './styles';

const Home = () => {
  return(
    <Container>
      <Sidebar/>
      <Content>
        <div className="quantity">
          <p>usuários: 60</p>
        </div>
        <div className="quantity">
          <p>produtos: 100</p>
        </div>
      </Content>
    </Container>
  )
}

export default Home;