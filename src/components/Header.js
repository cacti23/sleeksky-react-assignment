import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
  const { updateTime, time } = useContext(GlobalContext);
  setInterval(updateTime, 1000);
  return (
    <div className='header'>
      <div className='header-logo'>
        <img
          src='https://image.freepik.com/free-vector/cute-astronaut-dabbing-cartoon-icon-illustration-space-science-icon-isolated-flat-cartoon-style_138676-3101.jpg'
          alt='logo'
        />
      </div>
      <div className='header-time'>
        <h4>header</h4>
        <h1>Current time is : {time}</h1>
      </div>
    </div>
  );
};

export default Header;
