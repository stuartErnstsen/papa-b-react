import { useContext, useState } from 'react';
import PbContext from './Context/PbContext';
import routes from './appRoutes';
import Header from './Components/Header/Header';
import './styles/Reset.css';
import './styles/App.css';

function App() {
  const { test, testState, setTestState } = useContext(PbContext)

  return (
    <div className='App-container'>
      <Header />
      {routes}
    </div>
  );
}

export default App;
