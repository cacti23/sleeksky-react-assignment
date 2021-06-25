import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Footer = () => {
  const { count } = useContext(GlobalContext);
  return (
    <div className='footer'>
      <h4>Footer Element</h4>
      <h4>You clicked {count} times</h4>
    </div>
  );
};

export default Footer;
