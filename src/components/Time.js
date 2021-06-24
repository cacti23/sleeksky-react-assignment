import React, { useState } from 'react';

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  );
};

export default Time;
