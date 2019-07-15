// for purposes of DRY coding, here's the switch case
// should take argument of selected madlib('s keyword), then compares it to switches which then call to appropriate component
import React from 'react';

const SwitchCase = (props) => {
    switch (props.madlib) {
        case "":
            // call madlib {be sure to pass along props.prompt}
            break;
    } 
}

export default SwitchCase;