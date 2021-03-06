import styled from 'styled-components';
import {shade} from 'polished';


export const Container = styled.button`
  background: #ffa935;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-top: 24px;
  font-weight: bold;
  
  &:hover{
    background: ${shade(0.2,'#ffa935')};
  }
`;