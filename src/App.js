import UpgradePlan from "./components/UpgradePlan";
import UserInfo from "./components/UserInfo";
import Pricing from "./components/Pricing";
import './App.css';

function App() {
  return (
    <div className="App">
     <UpgradePlan />
     <div className="user">
       <UserInfo />
       <Pricing />
     </div>
    </div>
  );
}

export default App;
