// will display madlib child components based on selection
// when calling switchcase, pass along "prompt=false"
import React, {useState} from 'react';
import SwitchCase from './SWITCH';

const MadlibTerminal = (props) => {
    const [choice, setChoice] = useState('')
    // token = props.token;

    // console.log(choice)

    const choices = () => {
        return(
            (choice==='') ?  (
                <div>
                    <h2>Select a madlib to play:</h2>
                    {/* <ul> */}
                    <form onClick={(e) => setChoice(e.target.value)}>
                        <button type="radio" value={"Little"}>The Little Blank </button>
                        <button type="radio" value={"Hobby"}>The Blank Who Liked to Blank</button>
                        <button type="radio" value={"Normal"}>A Normal Day </button>
                        <button type="radio" value={"Recipe"}>A Recipe </button>
                        <button type="radio" value={"House"}>My Dream Home</button> 
                        <button type="radio" value={"Gold"}>Goldilocks </button>
                        <button type="radio" value={"Clown"}>Clowns </button>
                    </form>
                    {/* </ul> */}
                </div>
            ) : (
                <SwitchCase prompt={false} madlib={choice} />
            )
        )
    }
            
    return (
        <div>
            {choices()}
        </div>
    )
}

export default MadlibTerminal;