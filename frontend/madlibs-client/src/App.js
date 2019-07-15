import React, {useState} from 'react';
import './App.css';
import Navbar from '../src/components/site/navbar/Navbar';
import Footer from '../src/components/site/footer/Footer';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
