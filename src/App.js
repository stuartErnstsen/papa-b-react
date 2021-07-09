import routes from './appRoutes';
import Header from './Components/Header/Header';
import './styles/Reset.css';
import './styles/App.css';

function App() {

  return (
    <div className='App-container'>
      <Header />
      {routes}
    </div>
  );
}

export default App;
