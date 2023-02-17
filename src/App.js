import './App.css';
import Hero from './Hero';
import Middle from './Middle';
import ShuvAnime from './ShuvaAnime';
import UserDetail from './components/User_Authentication/User_Authentication';
import Footer from './components/footer/Footer'
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Homepage/Home';
import UserDashboard from './routes/Dashboard/UserDashboard';
import ScrollToTop from './routes/ScrollToTop';


function App() {
  return (
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<UserDetail/>}/>
    <Route path='/user' element={<UserDashboard/>}/>
   </Routes>
  );
}

export default App;
