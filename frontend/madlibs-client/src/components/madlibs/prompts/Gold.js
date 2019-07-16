import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Gold = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [savedAs, setSavedAs] = useState('Goldilocks')
    const [noun1, setNoun1] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [building, setBuilding] = useState('');
    const [noun2, setNoun2] = useState('');
    const [number1, setNumber1] = useState('');
    const [plNoun1, setPLnoun1] = useState('');
    const [adj1, setAdj1] = useState('');
    const [adj2, setAdj2] = useState('');
    const [noun3, setNoun3] = useState('');
    const [adj3, setAdj3] = useState('');
    const [adj4, setAdj4] = useState('');
    const [verb1, setVerb1] = useState('');
    const [plNoun2, setPLnoun2] = useState('');
    const [adj5, setAdj5] = useState('');
    const [adj6, setAdj6] = useState('');
    const [noun4, setNoun4] = useState('');
    const [famMem1, setFamMem1] = useState('');
    const [adverb, setAdverb] = useState('');
    const [famMem2, setFamMem2] = useState('');
    const [famMem3, setFamMem3] = useState('');
    const [quote, setQuote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Gold',
                savedAs: savedAs,
                noun1: noun1,
                name: name,
                location: location,
                building: building,
                noun2: noun2,
                number1: number1,
                PLnoun1: plNoun1,
                adj1: adj1,
                adj2: adj2,
                noun3: noun3,
                adj3: adj3,
                adj4: adj4,
                verb1: verb1,
                PLnoun2: plNoun2,
                adj5: adj5,
                adj6: adj6,
                noun4: noun4,
                famMem1: famMem1,
                adverb: adverb,
                famMem2: famMem2,
                famMem3: famMem3,
                quote: quote
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
                <h2>Goldilocks</h2>

                <Label htmlFor="noun1">Noun</Label>
                <Input name="noun1" value={noun1} placeholder="noun" onChange={(e) => setNoun1(e.target.value)} />
                <br />

                <Label htmlFor="name1">Name</Label>
                <Input name="name1" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
                <br />

                <Label htmlFor="location">Location</Label>
                <Input name="location" value={location} placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                <br />
                
                <Label htmlFor="building">Building </Label>
                <Input name="building" value={building} placeholder="building" onChange={(e) => setBuilding(e.target.value)} />
                <br />

                <Label htmlFor="noun2">Noun</Label>
                <Input name="noun2" value={noun2} placeholder="noun" onChange={(e) => setNoun2(e.target.value)} />
                <br />

                <Label htmlFor="number1">Number </Label>
                <Input name="number1" value={number1} placeholder="number" onChange={(e) => setNumber1(e.target.value)} />
                <br />

                <Label htmlFor="plnoun1">Plural Noun</Label>
                <Input name="plnoun1" value={plNoun1} placeholder="plural noun" onChange={(e) => setPLnoun1(e.target.value)} />
                <br />

                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />

                <Label htmlFor="adj2">Adjective</Label>
                <Input name="adj2" value={adj2} placeholder="adjective" onChange={(e) => setAdj2(e.target.value)} />
                <br />

                <Label htmlFor="noun3">Noun</Label>
                <Input name="noun3" value={noun3} placeholder="noun" onChange={(e) => setNoun3(e.target.value)} />
                <br />
                
                <Label htmlFor="adj3">Adjective</Label>
                <Input name="adj3" value={adj3} placeholder="adjective" onChange={(e) => setAdj3(e.target.value)} />
                <br />
                
                <Label htmlFor="adj4">Adjective</Label>
                <Input name="adj4" value={adj4} placeholder="adjective" onChange={(e) => setAdj4(e.target.value)} />
                <br />

                <Label htmlFor="verb1">verb </Label>
                <Input name="verb1" value={verb1} placeholder="Verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />

                <Label htmlFor="plnoun2">Plural Noun</Label>
                <Input name="plnoun2" value={plNoun2} placeholder="plural noun" onChange={(e) => setPLnoun2(e.target.value)} />
                <br />

                <Label htmlFor="adj5">Adjective</Label>
                <Input name="adj5" value={adj5} placeholder="adjective" onChange={(e) => setAdj5(e.target.value)} />
                <br />

                <Label htmlFor="adj6">Adjective</Label>
                <Input name="adj6" value={adj6} placeholder="adjective" onChange={(e) => setAdj6(e.target.value)} />
                <br />

                <Label htmlFor="noun4">Noun </Label>
                <Input name="noun4" value={noun4} placeholder="noun" onChange={(e) => setNoun4(e.target.value)} />
                <br />

                <Label htmlFor="famMem1">Family Member</Label>
                <Input name="famMem1" value={famMem1} placeholder="family member" onChange={(e) => setFamMem1(e.target.value)} />
                <br />

                <Label htmlFor="adverb">Adverb </Label>
                <Input name="adverb" value={adverb} placeholder="adverb" onChange={(e) => setAdverb(e.target.value)} />
                <br />

                <Label htmlFor="famMem2">Family Member</Label>
                <Input name="famMem2" value={famMem2} placeholder="family member" onChange={(e) => setFamMem2(e.target.value)} />
                <br />

                <Label htmlFor="famMem3">Family Member</Label>
                <Input name="famMem3" value={famMem3} placeholder="family member" onChange={(e) => setFamMem3(e.target.value)} />
                <br />

                <Label htmlFor="quote">Exclamation </Label>
                <Input name="quote" value={quote} placeholder="exclamation" onChange={(e) => setQuote(e.target.value)} />
                <br /> <br />

                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="Goldilocks" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                <p>There was once a little {noun1} named {name}. One day, {name} got lost in the {location} and thought for sure they'd never be found. But then, they spotted a small {building} a little ways off! Using their trusty {noun2}, {name} soon found their way inside. <br />
                There, they found {number1} bowls of {plNoun1}. They were hungry, so they decided to eat some. The first bowl was too {adj1}, though, and the second bowl was too {adj2}! The third bowl, however, was just right and {name} ate up all the {plNoun1}. <br />
                Next, they {number1} {noun3}s and decided to rest their tired legs. The first {noun3} was too {adj3}, and the second was too {adj4}, though! But the third one was just right and {name} sat on it for a good while. <br />
                After a while, though, {name} started feeling very sleepy, so they went to look for some place to {verb1}. Upstairs, they found {number1} {plNoun2}. As before, the first two were unsuitable, being too {adj5} or too {adj6}, but the third was just right and {name} was able to {verb1} soundly. <br /> 
                Soon, however, the {number1} {noun4}s who lived in the {building} arrived home. There, they found that their home had been broken into! <br/>
                "Someone's eaten our {plNoun1}!" exclaimed {famMem1} {noun4} {adverb}. <br/>
                "Someone's sat on our {noun3}s!" cried {famMem2} {noun4}, dismayed. <br/>
                "Someone's {verb1}ing one of my {plNoun2}!" cried {famMem3} {noun4}, surprised. <br/>
                All this commotion alerted {name} to the presence of the {noun4}s. "{quote}!" {name} shouted and started to run from the {building}. Before they's gotten very far, however, the {noun4}s caught them and ate them all up. <br />
                The End </p>
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm() : Mprompt()}
        </div>
    )
} 

export default Gold;