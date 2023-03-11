import './App.css';
import UserDetail from './components/User_Authentication/User_Authentication';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Homepage/Home';
import UserDashboard from './routes/Dashboard/UserDashboard';
import ScrolltoTop from './ScrollToTop';


function App() {
  return (
  <>
  <ScrolltoTop/>
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<UserDetail/>}/>
    <Route path='/user' element={<UserDashboard/>}/>
    
   </Routes>
   </>
  );
}

export default App;
