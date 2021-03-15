import styled from 'styled-components';

export const Container = styled.div`
text-align: center;

h1{
  margin-top: 100px;
}

form{
  margin: 80px auto;
  width: 340px;
  text-align: center;

  input{
    margin-bottom: 10px;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: none;
  }
}
`;

export const Logo = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  max-width: 340px;

  margin: 100px auto;
  img {
    height: 80px;
  }
`;