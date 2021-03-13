import styled from 'styled-components';

export const Container = styled.div`
  height: 200vh;
  min-width: 120px;
  
  display: flex;
  flex-direction:column;
  align-items: stretch;
  background-color: #312E38;
  font-size: 24px;

  aside{
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    a{
      display: block;
      margin-bottom: 8px;
      color: #FFFFFF;
      text-decoration: none;
    }
  }
`;