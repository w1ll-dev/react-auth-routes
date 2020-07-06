import React, { useState } from 'react';
import { login } from './auth'

const App = () => {
  const [name, changeName] = useState('')
  const [pswd, changePswd] = useState('')


  return <div className="App">
    <input type="text" onChange={(e) => changeName(e.target.value)} />
    <input type="text" onChange={(e) => changePswd(e.target.value)} />
    <button onClick={() => login({ name, pswd })}>login</button>
  </div>
}

export default App;
