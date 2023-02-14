import './App.css';
import Hero from './Hero';
import Middle from './Middle';
import ShuvAnime from './ShuvaAnime';
import UserDetail from './components/User_Authentication/User_Authentication';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div>
       <Hero/>
       <Middle/>
      <ShuvAnime/>
      <UserDetail/>
      <Footer/>
    </div>
  );
}

export default App;
