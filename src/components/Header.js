import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Time from './Time';

const Header = () => {
  const { updateTime, time } = useContext(GlobalContext);
  setInterval(updateTime, 1000);
  return (
    <div className='header'>
      <div className='header-logo'>
        <h4>Logo</h4>
      </div>
      <div className='header-time'>
        <h4>
          Current time is: <h1>{time}</h1>
        </h4>
      </div>
    </div>
  );
};

export default Header;
