import React, {useState} from 'react';
import './App.css';
import Navbar from '../src/components/site/navbar/Navbar';
import Footer from '../src/components/site/footer/Footer';
import MadlibTerminal from './components/madlibs/MadlibTerminal';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  
  return (
    <div>
      <Navbar />
      <MadlibTerminal token={sessionToken}/>
      <Footer />
    </div>
  );
}

export default App;
