
import React from 'react';
import Person from './components/Person';
import Product from './components/Product';

function App() {
  return (
    <div>
      {/* Passing props to Person component */}
      <Person name="Vishu" age={25} />
      <Person name="Dev" age={30} />

      {/* Passing props to Product component */}
      <Product name="Smartphone" price="$699" />
      <Product name="Laptop" price="$1200" />
    </div>
  );
}

export default App;
