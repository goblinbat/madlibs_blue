// includes links to: 
//      Signup and Login (Both Auth.js)
//     OR 
//      Logout (build in here), Profile (User.js), Create Madlib (MadlibTerminal.js), and Read Madlib (ViewMadlib.js)
import React from 'react';

const Navbar = (props) => {
    const logout = () => {
        localStorage.clear();
        props.setSession(undefined);
        console.log('logged out')
    }

    return (
        <div>
            NAVBAR 
            <button onClick={logout}> Logout</button>
        </div>
    )
}

export default Navbar;