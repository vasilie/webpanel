import {useState, useEffect} from 'react';
//make piece of state, based off of value in localstorage (or default)

function UseLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    console.log('VALUE', val);
    return val;
  });

  // useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
export default UseLocalStorageState;
