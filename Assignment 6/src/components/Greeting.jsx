
import React from 'react';

function Greeting() {
  const name = "Vishang lad";
  const currentDate = new Date().toLocaleDateString(); 

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Today's date is {currentDate}.</p>
    </div>
  );
}

export default Greeting;
