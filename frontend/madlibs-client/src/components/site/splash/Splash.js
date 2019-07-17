import React from 'react';
import MadlibTerminal from '../../madlibs/MadlibTerminal';

const SplashPage = (props) => {
    return (
        <div>
            <MadlibTerminal token={props.token} />
        </div>
    )
}

export default SplashPage;