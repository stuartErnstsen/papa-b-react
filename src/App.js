import { useContext, useState } from 'react';
import PbContext from './Context/PbContext';
import './styles/Reset.css';
import './styles/App.css';

function App() {
  const { test, testState, setTestState } = useContext(PbContext)

  return (
    <div className='App-container'>
      {test}
      <input value={testState} onChange={(e) => setTestState(e.target.value)} />
      <h2>{testState}</h2>
    </div>
  );
}

export default App;
