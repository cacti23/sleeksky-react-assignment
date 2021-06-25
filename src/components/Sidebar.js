import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Sidebar = () => {
  const { updateCount } = useContext(GlobalContext);
  return (
    <div className='sidebar'>
      <h4>Sidebar Element</h4>
      <button type='button' onClick={() => updateCount()}>
        Click Me
      </button>
    </div>
  );
};

export default Sidebar;
