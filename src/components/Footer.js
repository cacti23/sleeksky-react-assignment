import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Footer = () => {
  const { count } = useContext(GlobalContext);
  return (
    <div className='footer'>
      <h4 className='name'>footer</h4>
      <h1>You clicked {count} times</h1>
    </div>
  );
};

export default Footer;
