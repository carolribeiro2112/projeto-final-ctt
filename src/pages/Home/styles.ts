import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Page = styled.div`
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  max-width: 800px;
  margin: 100px auto;
  align-items: center;
  justify-content: center;

  .quantity {
    width: 175px;
    height: 95px;
    padding: 36px;
    background-color: #FFF;
    border-radius: 8px;
    border: 2px solid black;

    & +.quantity {
      margin-left: 50px;  
    }
  }
`;