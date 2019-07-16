import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const House = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [savedAs, setSavedAs] = useState('My Dream Home');
    const [building, setBuilding] = useState('');
    const [number1, setNumber1] = useState('');
    const [adj1, setAdj1] = useState('');
    const [number2, setNumber2] = useState('');
    const [room, setRoom] = useState('');
    const [noun1, setNoun1] = useState('');
    const [plNoun1, setPLnoun1] = useState('');
    const [adj2, setAdj2] = useState('');
    const [plNoun2, setPLnoun2] = useState('');
    const [shape, setShape] = useState('');
    const [noun2, setNoun2] = useState('');
    const [animal, setAnimal] = useState('');
    const [adj3, setAdj3] = useState('');
    const [noun3, setNoun3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'House',
                savedAs: savedAs,
                building: building,
                number1: number1,
                adj1: adj1,
                number2: number2,
                room: room,
                noun1: noun1,
                PLnoun1: plNoun1,
                adj2: adj2,
                PLnoun2: plNoun2,
                shape: shape,
                noun2: noun2,
                animal: animal,
                adj3: adj3,
                noun3: noun3
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
                <h2>My Dream Home</h2>

                <Label htmlFor="building">Building </Label>
                <Input name="building" value={building} placeholder="building" onChange={(e) => setBuilding(e.target.value)} />
                <br />

                <Label htmlFor="number">Number </Label>
                <Input name="number" value={number1} placeholder="number" onChange={(e) => setNumber1(e.target.value)} />
                <br />
                
                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />

                <Label htmlFor="number2">Number</Label>
                <Input name="number2" value={number2} placeholder="number" onChange={(e) => setNumber2(e.target.value)} />
                <br />

                <Label htmlFor="room">Room</Label>
                <Input name="room" value={room} placeholder="room" onChange={(e) => setRoom(e.target.value)} />
                <br />
                
                <Label htmlFor="noun1">Noun</Label>
                <Input name="noun1" value={noun1} placeholder="noun" onChange={(e) => setNoun1(e.target.value)} />
                <br />

                <Label htmlFor="PLnoun1">Plural Noun </Label>
                <Input name="PLnoun1" value={plNoun1} placeholder="plural noun" onChange={(e) => setPLnoun1(e.target.value)} />
                <br />

                <Label htmlFor="adj2">Adjective </Label>
                <Input name="adj2" value={adj2} placeholder="adjective" onChange={(e) => setAdj2(e.target.value)} />
                <br />

                <Label htmlFor="plNoun2">Plural Noun </Label>
                <Input name="plNoun2" value={plNoun2} placeholder="plural noun" onChange={(e) => setPLnoun2(e.target.value)} />
                <br />

                <Label htmlFor="shape">Shape </Label>
                <Input name="shape" value={shape} placeholder="shape" onChange={(e) => setShape(e.target.value)} />
                <br />
                
                <Label htmlFor="noun2">Noun</Label>
                <Input name="noun2" value={noun2} placeholder="noun" onChange={(e) => setNoun2(e.target.value)} />
                <br />
                
                <Label htmlFor="animal">Animal</Label>
                <Input name="animal" value={animal} placeholder="animal" onChange={(e) => setAnimal(e.target.value)} />
                <br />
                
                <Label htmlFor="adj3">Adjective </Label>
                <Input name="adj3" value={adj3} placeholder="adjective" onChange={(e) => setAdj3(e.target.value)} />
                <br />
                
                <Label htmlFor="noun3">Noun</Label>
                <Input name="noun3" value={noun1} placeholder="noun" onChange={(e) => setNoun3(e.target.value)} />
                
                <br /> <br />

                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="My Dream Home" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                My dream home is a {building} with {number1} bed and {number2} bath. In the middle of my home, I want a large {room} with a {noun1} in the center. Surrounding the {noun1} would be {plNoun1}. In my bedroom I would have {number1} {adj1} {plNoun2} arranged in a {shape}. There would also be a {adj1} {noun2} for my pet {animal}. And of course my home would have a {adj3} {noun3}!
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm() : Mprompt()}
        </div>
    )
} 

export default House;