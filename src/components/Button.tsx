import React, { CSSProperties, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export interface ButtonProp {
  initialColor: string;
  hoverColor: string;
  displayText: string;
  endpoint: string;
}

interface Props {
  entry: ButtonProp;
}

const Button = ({ entry }: Props) => {
  const [background, setBackground] = useState(entry.initialColor);
  const navigate = useNavigate();

  const buttonStyles : CSSProperties = {
    all: 'unset',
    width: '12em',
    height: '4em',
    color: 'white',
    background,
    borderRadius: '2em',
    transition: 'background 0.5s ease',
  };

  const handleMouseEnter = () => {
    setBackground(entry.hoverColor);
  };

  const handleMouseLeave = () => {
    setBackground(entry.initialColor);
  };

  const handleOnClick = (endpoint: string) => {
    navigate(endpoint)
    window.scrollTo(0,0);
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
      onClick={() => handleOnClick(entry.endpoint)}
    >
      {entry.displayText}
    </button>
  );
};

export default Button;
