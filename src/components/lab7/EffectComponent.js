import React, { useState, useEffect } from 'react';

function EffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div className="effect-component">
      <h3>Effect Hook</h3>
      <p>Check the document title!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default EffectComponent;
