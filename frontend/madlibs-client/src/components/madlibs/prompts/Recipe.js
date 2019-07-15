import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Recipe = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [savedAs, setSavedAs] = useState('A Recipe');
    const [famMem1, setFamMem1] = useState('');
    const [food1, setFood1] = useState('');
    const [verb1, setVerb1] = useState('');
    const [number1, setNumber1] = useState('');
    const [noun1, setNoun1] = useState('');
    const [noun2, setNoun2] = useState('');
    const [noun3, setNoun3] = useState('');
    const [adj1, setAdj1] = useState('');
    const [number2, setNumber2] = useState('');
    const [plNoun1, setPLnoun1] = useState('');
    const [container, setContainer] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Recipe',
                savedAs: savedAs,
                famMem1: famMem1,
                food1: food1,
                verb1: verb1,
                number1: number1,
                noun1: noun1,
                noun2: noun2,
                noun3: noun3,
                adj1: adj1,
                number2: number2,
                PLnoun1: plNoun1,
                container: container,
                number3: number3,
                number4: number4
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }).then((res) => res.json())
            .then(data => {
                setPrompt(true)
            })
        })
    }

    useEffect(() => {}, [prompt])

    const fillForm = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <h2>A Recipe</h2>

                <Label htmlFor="famMem">Family Member</Label>
                <Input name="famMem" value={famMem1} placeholder="family member" onChange={(e) => setFamMem1(e.target.value)} />
                <br />

                <Label htmlFor="food1">Food </Label>
                <Input name="food1" value={food1} placeholder="food" onChange={(e) => setFood1(e.target.value)} />
                <br />

                <Label htmlFor="verb1">verb </Label>
                <Input name="verb1" value={verb1} placeholder="Verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />

                <Label htmlFor="number1">Number </Label>
                <Input name="number1" value={number1} placeholder="number" onChange={(e) => setNumber1(e.target.value)} />
                <br />

                <Label htmlFor="noun1">Noun</Label>
                <Input name="noun1" value={noun1} placeholder="noun" onChange={(e) => setNoun1(e.target.value)} />
                <br />

                <Label htmlFor="noun2">Noun</Label>
                <Input name="noun2" value={noun2} placeholder="noun" onChange={(e) => setNoun2(e.target.value)} />
                <br />

                <Label htmlFor="noun3">Noun</Label>
                <Input name="noun3" value={noun3} placeholder="noun" onChange={(e) => setNoun3(e.target.value)} />
                <br />

                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />

                <Label htmlFor="number2">Number </Label>
                <Input name="number2" value={number2} placeholder="number" onChange={(e) => setNumber2(e.target.value)} />
                <br />
                
                <Label htmlFor="plNoun1">Plural Noun</Label>
                <Input name="plNoun1" value={plNoun1} placeholder="verb ending in -ing" onChange={(e) => setPLnoun1(e.target.value)} />
                <br />

                <Label htmlFor="container">Container</Label>
                <Input name="container" value={container} placeholder="container" onChange={(e) => setContainer(e.target.value)} />
                <br />

                <Label htmlFor="number3">Number </Label>
                <Input name="number3" value={number3} placeholder="number" onChange={(e) => setNumber3(e.target.value)} />
                <br />
                
                <Label htmlFor="number4">Number </Label>
                <Input name="number4" value={number4} placeholder="number" onChange={(e) => setNumber4(e.target.value)} />
                <br /> <br />

                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="A Recipe" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                Today, I will share my {famMem1}'s recipe for {food1}! First, you {verb1} the oven to {number1} degrees Farenheit. Then mix {noun1}, {noun2}, and {noun3} in a {adj1} mixing bowl. Add in {number2} {plNoun1} and pour into a {container}. Place the {container} in the oven for {number3} minutes. Remove from oven and serve when cool. Serves {number4}.
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm : Mprompt}
        </div>
    )
} 

export default Recipe;