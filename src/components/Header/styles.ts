import styled from 'styled-components';

export const Container = styled.header`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 36px;

  border-bottom: 1px solid black;

  svg{
    cursor:pointer;
    color: #393831;

    &:hover{
      color:#ffa935;
    }
  }

`;