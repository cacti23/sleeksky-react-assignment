import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Content = () => {
  const { clickLog } = useContext(GlobalContext);
  return (
    <div className='content'>
      <h4>Content Element</h4>
      {clickLog.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
};

export default Content;
