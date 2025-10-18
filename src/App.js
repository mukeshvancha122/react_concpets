import logo from './logo.svg';
import './App.css';
import WelcomeFunctional from './components/WelcomeFunctional';
import WelcomeClassComponent from './components/WelcomeClassComponent';
import Messgae from './components/Message';
import Counter from './components/Counter';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <WelcomeFunctional name="Mukesh Reddy" heroName="Prabhas"/>
      <WelcomeClassComponent name="Mukesh Reddy"/>
      {/* <Messgae/> */}
      <Counter/>
      {/* <UserGreeting/> */}
      <NameList/>
    </div>
  );
}

export default App;
