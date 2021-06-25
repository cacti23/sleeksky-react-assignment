import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
  const { updateTime, time } = useContext(GlobalContext);
  setInterval(updateTime, 1000);
  return (
    <div className='header'>
      <div className='header-logo'>
        <h4>Logo</h4>
      </div>
      <div className='header-time'>
        <h4>header</h4>
        <h1>Current time is : {time}</h1>
      </div>
    </div>
  );
};

export default Header;
