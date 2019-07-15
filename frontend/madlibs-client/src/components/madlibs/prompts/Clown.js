import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Clown = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [savedAs, setSavedAs] = useState('Clowns')
    const [adj1, setAdj1] = useState('');
    const [plNoun1, setPLnoun1] = useState('');
    const [adj2, setAdj2] = useState('');
    const [plNoun2, setPLnoun2] = useState('');
    const [plNoun3, setPLnoun3] = useState('');
    const [adj3, setAdj3] = useState('');
    const [verb1, setVerb1] = useState('');
    const [plNoun4, setPLnoun4] = useState('');
    const [verb2, setVerb2] = useState('');
    const [adj4, setAdj4] = useState('');
    const [verb3, setVerb3] = useState('');
    const [noun2, setNoun2] = useState('');
    const [famMem1, setfamMem1] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Clown',
                savedAs: savedAs,
                adj1: adj1,
                PLnoun1: plNoun1,
                adj2: adj2,
                PLnoun2: plNoun2,
                PLnoun3: plNoun3,
                adj3: adj3,
                verb1: verb1,
                PLnoun4: plNoun4,
                verb2: verb2,
                adj4: adj4,
                verb3: verb3,
                noun2: noun2,
                famMem1: famMem1,
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
                <h2>Clowns</h2>

                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />

                <Label htmlFor="plNoun1">Plural Noun </Label>
                <Input name="plNoun1" value={plNoun1} placeholder="plural noun" onChange={(e) => setPLnoun1(e.target.value)} />
                <br />

                <Label htmlFor="adj2">Adjective </Label>
                <Input name="adj2" value={adj2} placeholder="adjective" onChange={(e) => setAdj2(e.target.value)} />
                <br />

                <Label htmlFor="plNoun2">Plural Noun</Label>
                <Input name="plNoun2" value={plNoun2} placeholder="plural noun" onChange={(e) => setPLnoun2(e.target.value)} />
                <br />

                <Label htmlFor="plNoun3">Plural Noun</Label>
                <Input name="plNoun3" value={plNoun3} placeholder="plural noun" onChange={(e) => setPLnoun3(e.target.value)} />
                <br />

                <Label htmlFor="adj3">Adjective</Label>
                <Input name="adj3" value={adj3} placeholder="adjective" onChange={(e) => setAdj3(e.target.value)} />
                <br />

                <Label htmlFor="verb1">Verb </Label>
                <Input name="verb1" value={verb1} placeholder="verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />

                <Label htmlFor="plNoun4">Plural Noun </Label>
                <Input name="plNoun4" value={plNoun4} placeholder="plural noun" onChange={(e) => setPLnoun4(e.target.value)} />
                <br />

                <Label htmlFor="Verb2">Verb</Label>
                <Input name="Verb2" value={Verb2} placeholder="verb" onChange={(e) => setVerb2(e.target.value)} />
                <br />

                <Label htmlFor="adj4">Adjective </Label>
                <Input name="adj4" value={adj4} placeholder="adjective" onChange={(e) => setAdj4(e.target.value)} />
                <br />

                <Label htmlFor="Verb3">Verb</Label>
                <Input name="Verb3" value={Verb3} placeholder="verb" onChange={(e) => setVerb3(e.target.value)} />
                <br />
                 
                <Label htmlFor="noun2">Noun</Label>
                <Input name="noun2" value={noun2} placeholder="noun" onChange={(e) => setNoun2(e.target.value)} />
                <br />
                
                <Label htmlFor="famMem1">Familial Relation</Label>
                <Input name="famMem1" value={famMem1} placeholder="family member" onChange={(e) => setfamMem1(e.target.value)} />
                <br />

                <br />
                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="Clowns" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                My little brother has always been afraid of clowns. I've tried explaining to him that they're just {adj1} {plNoun1} wearing {adj2} costumes, but he insists that they're actually {plNoun2}. <br/>
                He thinks they have {plNoun3} and eat {adj3} kids. He thinks they {verb1} {plNoun4}. <br />
                I think this all started when he saw a clown {verb2} in a movie, but he claims that he saw a {adj4} clown {verb3} a {noun2} in a restaurant when he was younger. <br/>
                I think he's making it up, but this whole thing does make it difficult to tell him what our {famMem1}'s new job is.
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm : Mprompt}
        </div>
    )
} 

export default Clown;