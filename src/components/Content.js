import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Content = () => {
  const { clickLog } = useContext(GlobalContext);
  return (
    <div className='content'>
      <h4>content</h4>
      <ul>
        {clickLog.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Content;
