import logo from './logo.svg';
import './App.css';
import WelcomeFunctional from './components/WelcomeFunctional';
import WelcomeClassComponent from './components/WelcomeClassComponent';
import Messgae from './components/Message';

function App() {
  return (
    <div className="App">
      <WelcomeFunctional name="Mukesh Reddy"/>
      <WelcomeClassComponent name="Mukesh Reddy"/>
      <Messgae/>
    </div>
  );
}

export default App;
