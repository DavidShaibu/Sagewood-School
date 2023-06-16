import React, { CSSProperties, useState } from 'react';

interface Entry {
  initialColor: string;
  hoverColor: string;
  displayText: string;
}

interface Props {
  entry: Entry;
}

const Button = ({ entry }: Props) => {
  const [background, setBackground] = useState(entry.initialColor);

  const buttonStyles : CSSProperties = {
    all: 'unset',
    width: '12em',
    height: '4em',
    color: 'white',
    background,
    borderRadius: '2em',
  };

  const handleMouseEnter = () => {
    setBackground(entry.hoverColor);
  };

  const handleMouseLeave = () => {
    setBackground(entry.initialColor);
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
    >
      {entry.displayText}
    </button>
  );
};

export default Button;
