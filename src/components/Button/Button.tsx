import React from 'react';

type buttonProps = {
  buttonText: string;
  getClick: () => void;
}

const Button = ({ buttonText, getClick }:buttonProps) => (
  <button onClick={() => getClick()}>

    {buttonText}
  </button>
);

export default Button;
