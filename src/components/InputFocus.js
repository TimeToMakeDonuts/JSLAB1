import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="input-focus">
      <h3>UseRef Example</h3>
      <input ref={inputRef} type="text" placeholder="Focus on me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
