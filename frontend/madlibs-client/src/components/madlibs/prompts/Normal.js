import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Normal = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [savedAs, setSavedAs] = useState('A Normal Day')
    const [verb1, setVerb1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [adj1, setAdj1] = useState('');    
    const [food1, setFood1] = useState('');
    const [Container, setContainer] = useState('');
    const [liquid, setLiquid] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [verb3, setVerb3] = useState('');
    const [occupation, setOccupation] = useState('');
    const [verb4, setVerb4] = useState('');
    const [ingVerb, setIngVerb] = useState('');
    const [food2, setFood2] = useState('');
    const [verb5, setVerb5] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Normal',
                savedAs: savedAs,
                verb1: verb1,
                verb2: verb2,
                adj1: adj1,
                food1: food1,
                Container: Container,
                liquid: liquid,
                vehicle: vehicle,
                verb3: verb3,
                occupation: occupation,
                verb4: verb4,
                ingVerb: ingVerb,
                food2: food2,
                verb5: verb5,
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
                <h2>A Normal Day</h2>

                <Label htmlFor="verb1">verb </Label>
                <Input name="verb1" value={verb1} placeholder="Verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />

                <Label htmlFor="verb2">Verb </Label>
                <Input name="verb2" value={verb2} placeholder="verb" onChange={(e) => setVerb2(e.target.value)} />
                <br />

                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />
                
                <Label htmlFor="food1">Food </Label>
                <Input name="food1" value={food1} placeholder="food" onChange={(e) => setFood1(e.target.value)} />
                <br />

                <Label htmlFor="container">Container </Label>
                <Input name="container" value={container} placeholder="container" onChange={(e) => setContainer(e.target.value)} />
                <br />

                <Label htmlFor="liquid">Liquid</Label>
                <Input name="liquid" value={liquid} placeholder="liquid" onChange={(e) => setLiquid(e.target.value)} />
                <br />

                <Label htmlFor="vehicle">Vehicle</Label>
                <Input name="vehicle" value={vehicle} placeholder="vehicle" onChange={(e) => setVehicle(e.target.value)} />
                <br />

                <Label htmlFor="verb3">Verb </Label>
                <Input name="verb3" value={verb3} placeholder="verb" onChange={(e) => setVerb3(e.target.value)} />
                <br />

                <Label htmlFor="occupation">Job Title </Label>
                <Input name="occupation" value={occupation} placeholder="job title" onChange={(e) => setOccupation(e.target.value)} />
                <br /> 
                
                <Label htmlFor="verb4">Verb </Label>
                <Input name="verb4" value={verb4} placeholder="verb" onChange={(e) => setVerb4(e.target.value)} />
                <br />

                <Label htmlFor="ingVerb">Verb ending in -ing</Label>
                <Input name="ingVerb" value={ingVerb} placeholder="verb ending in -ing" onChange={(e) => setIngVerb(e.target.value)} />
                <br />
                
                <Label htmlFor="food2">Food </Label>
                <Input name="food2" value={food2} placeholder="food" onChange={(e) => setFood2(e.target.value)} />
                <br />
                
                <Label htmlFor="verb5">Verb </Label>
                <Input name="verb5" value={verb5} placeholder="verb" onChange={(e) => setVerb5(e.target.value)} />
                <br />
                
                <br /> 
                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="A Normal Day" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                I'd say I lead a very normal life. My day starts when I {verb1}. I then {verb2}. For breakfast, I eat {adj1} {food1} and drink a {container} of {liquid}. Then it's time to leave for work. I get in my {vehicle} and {verb3} to my job as a {occupation}. <br/>
                At work, I {verb4} until noon, at which point I eat more {d} for lunch. I spend the rest of the day {ingVerb}. <br/>
                After work, I return home, eat some {food2} for dinner, and {verb5} until bed. After all that, I sleep soundly until morning, ending my completely normal day.
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm : Mprompt}
        </div>
    )
} 

export default Normal;