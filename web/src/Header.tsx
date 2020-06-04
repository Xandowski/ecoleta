import React from 'react';

interface Headerprops {
  title: string;
}

const Header: React.FC<Headerprops> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;