import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 100px auto;

  h1{
    margin-bottom: 50px;
  }

  form{
    margin: 80px auto;
    width: 340px;
    text-align: center;
  }

  input{
    margin-bottom: 10px;
    width: 100%;
    height: 56px;
    border-radius: 10px;
  }
`;