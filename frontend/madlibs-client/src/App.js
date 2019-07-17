import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from '../src/components/site/navbar/Navbar';
import Footer from '../src/components/site/footer/Footer';
import MadlibTerminal from './components/madlibs/MadlibTerminal';
import Auth from './components/Auth/Auth';
import SplashPage from './components/site/splash/Splash'

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const authenticate = () => {
    return (
      (sessionToken !== localStorage.getItem('token')) ? <Auth updateToken={updateToken} /> : (
        <div>
          <Navbar setSession={setSessionToken} />
          <SplashPage token={sessionToken} />
          <Footer />
        </div>
      )
    )
  }
  
  return (
    <div>
      {authenticate()}
    </div>
  );
}

export default App;
