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
                        <br />
                        <button type="radio" value={"Hobby"}>The Blank Who Liked to Blank</button>
                        <br />
                        <button type="radio" value={"Normal"}>A Normal Day </button>
                        <br />
                        <button type="radio" value={"Recipe"}>A Recipe </button>
                        <br />
                        <button type="radio" value={"House"}>My Dream Home</button> 
                        <br />
                        <button type="radio" value={"Gold"}>Goldilocks </button>
                        <br />
                        <button type="radio" value={"Clown"}>Clowns </button>
                        <br />
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