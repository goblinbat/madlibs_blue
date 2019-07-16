import React, {useState} from 'react';
import './App.css';
import Navbar from '../src/components/site/navbar/Navbar';
import Footer from '../src/components/site/footer/Footer';
import MadlibTerminal from './components/madlibs/MadlibTerminal';
import Auth from './components/Auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  const authenticate = () => {
    return (
      (!sessionToken) ? <Auth /> : <MadlibTerminal token={sessionToken} />
    )
  }
  
  return (
    <div>
      <Navbar />
        <div className="content">
          {authenticate()}
        </div>
      <Footer />
    </div>
  );
}

export default App;
