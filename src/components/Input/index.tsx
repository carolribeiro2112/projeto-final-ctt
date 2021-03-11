import React, {InputHTMLAttributes} from 'react';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = () => {
  return(
    <>
      <input type="text"/>
    </>
  )
}

export default Input;