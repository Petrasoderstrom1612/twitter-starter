import React, { useState, useEffect } from 'react';
import TaskList from 'components/TaskList';

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('test'); /* mounting here */
  }, []) /* first appearance of use effect
  if empty array, the function jumps to the start of the use Effect function */

  useEffect(() => {
    window.alert(`the current counter is ${counter}`)
  }, [counter]) /* first appearance of use effect - counter mounts directly */

  const onCounterIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      Find me in src/app.js!
      <p>{counter}</p>
      <button onClick={onCounterIncrease} type="button"> counter increase </button>
      {counter === 1 && (<TaskList list="Test list" />)}
    </div>
  )
}
