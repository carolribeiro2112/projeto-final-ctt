import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 100px auto;

  h1{
    text-align: center;
    margin-bottom: 50px;
  }

  .list-header{
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items:center;

    padding: 36px;
    background-color: #FFF;

    border-radius: 10px 10px 0 0;
  }

  .link{
    text-align: center;
    margin-top: 50px;

    a{
      text-decoration:none;
      background-color: yellow;
      padding:20px;
      border-radius: 8px;
    }
  }
`;

export const Card = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items:center;

  padding: 36px;
  background-color: #FFF;
  border-radius: 0 0 10px 10px;

  svg{
    cursor: pointer;
  }
`;