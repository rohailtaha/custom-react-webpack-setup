import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => setCounter(counter => counter + 1)} />
      <h2>Counter: {counter}</h2>
    </>
  );
}

export default App;
