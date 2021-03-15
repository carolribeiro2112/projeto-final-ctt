import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Page = styled.div`
  margin: 0 auto;
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

    border: 1px solid #ffa935;

    padding: 36px;
    background-color: #FFF;

    border-radius: 10px;

    /* border-radius: 10px 10px 0 0; */
  }

  .list-header-editor{
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items:center;

    border: 1px solid #ffa935;

    padding: 36px;
    background-color: #FFF;

    border-radius: 10px;

    /* border-radius: 10px 10px 0 0; */
  }

  .link{
    text-align: center;
    margin-top: 50px;

    a{
      text-decoration:none;
      background-color: #ffb831;
      padding:20px;
      border-radius: 8px;
      color:#393831;
      font-weight: bold;

      &:hover{
      background: ${shade(0.2,'#ffb831')};
      }
    }
  }

  
`;

export const Card = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items:center;
  margin-top: 10px;

  border: 1px solid #ffa935;

  padding: 36px;
  background-color: #FFF;

  border-radius: 10px;
  
  /* &:last-child{
    border-radius: 0 0 10px 10px;
  }
   */

  svg{
    cursor: pointer;
  }
`;

export const CardEditor = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items:center;
  margin-top: 10px;

  border: 1px solid #ffa935;

  padding: 36px;
  background-color: #FFF;
  border-radius: 10px;

  /* &:last-child{
    border-radius: 0 0 10px 10px;
  } */
`;