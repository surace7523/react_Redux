import logo from './logo.svg';
import './App.css';
import User from './User.js';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Home/>
      <User data={{name:'suresh shrestha'}}/>
    </div>
  );
}

export default App;
