import './App.css';
//  import SignUp from './components/SignUp';
// import HomePage from './components/Homepage';
// import Loginform from './components/Loginform';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <Loginform/> */}
    {/* <SignUp/> */}
     <Routing/>
    </BrowserRouter>
   </div>
  );
}

export default App;