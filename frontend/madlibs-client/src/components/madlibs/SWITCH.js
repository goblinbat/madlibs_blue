// for purposes of DRY coding, here's the switch case
// should take argument of selected madlib('s keyword), then compares it to switches which then call to appropriate component
import React from 'react';
import Clown from '../madlibs/prompts/Clown';
import Gold from '../madlibs/prompts/Gold';
import Hobby from '../madlibs/prompts/Hobby';
import House from '../madlibs/prompts/House';
import Little from '../madlibs/prompts/Little';
import Normal from '../madlibs/prompts/Normal';
import Recipe from '../madlibs/prompts/Recipe';

const SwitchCase = (props) => {
    switch (props.madlib) {
        case "Clown":
            return (
                <Clown prompt={props.prompt}/>
            );
        case "Gold":
            return (
                <Gold prompt={props.prompt}/>
            );
        case "Hobby":
            return (
                <Hobby prompt={props.prompt}/>
            );
        case "House":
            return (
                <House prompt={props.prompt}/>
            )
        case "Little":
            return (
                <Little prompt={props.prompt}/>
            );
        case "Normal":
            return (
                <Normal prompt={props.prompt}/>
            );
        case "Recipe":
            return (
                <Recipe prompt={props.prompt}/>
            );
        default:
            console.log('Error: no madlib found');
            return (
                <div>
                    Switch is rendering but there is no madlib
                </div>
            )
    } 
}

export default SwitchCase;