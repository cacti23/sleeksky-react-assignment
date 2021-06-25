import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Sidebar = () => {
  const { updateCount } = useContext(GlobalContext);
  return (
    <div className='sidebar'>
      <h4>Sidebar</h4>
      <button type='button' onClick={() => updateCount()}>
        Click Here
      </button>
    </div>
  );
};

export default Sidebar;
