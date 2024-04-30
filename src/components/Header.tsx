// Header.tsx

import React from 'react';

interface HeaderProps {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  fontSize = '1.5rem',
  fontWeight = 'bold',
  color = '#000',
  children,
}) => {
  const headerStyle: React.CSSProperties = {
    fontSize,
    fontWeight,
    color,
  };

  return <h1 style={headerStyle}>{children}</h1>;
};

export default Header;
