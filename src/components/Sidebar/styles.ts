import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 250px;
  
  display: flex;
  flex-direction:column;
  align-items: stretch;
  background-color: #F1E5B3;
  font-size: 24px;

  aside{
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    a{
      display: block;
      margin-bottom: 8px;
      color: #393831;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color:  #ffa935;
      }
    }
  }
`;

export const Logo = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  max-width: 340px;

  margin: 30px auto;
  img {
    height: 80px;
  }
`;