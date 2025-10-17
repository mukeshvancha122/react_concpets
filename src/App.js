import logo from './logo.svg';
import './App.css';
import WelcomeFunctional from './components/WelcomeFunctional';
import WelcomeClassComponent from './components/WelcomeClassComponent';

function App() {
  return (
    <div className="App">
      <WelcomeFunctional name="Mukesh Reddy"/>
      <WelcomeClassComponent name="Mukesh Reddy"/>
    </div>
  );
}

export default App;
