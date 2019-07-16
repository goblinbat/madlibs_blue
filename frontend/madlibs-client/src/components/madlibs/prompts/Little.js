import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Little = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [noun1, setNoun1] = useState('');
    const [adj1, setAdj1] = useState('');
    const [ptverb1, setPTverb1] = useState('');
    const [verb1, setVerb1] = useState('');
    const [adj2, setAdj2] = useState('');
    const [verb2, setVerb2] = useState('');
    const [adj3, setAdj3] = useState('');
    const [quote, setQuote] = useState('');
    const [ptverb2, setPTverb2] = useState('');
    const [noun2, setNoun2] = useState('');
    const [savedAs, setSavedAs] = useState('The Little Blank')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Little',
                savedAs: savedAs,
                noun1: noun1,
                noun2: noun2,
                adj1: adj1,
                adj2: adj2,
                adj3: adj3,
                PTverb1: ptverb1,
                PTverb2: ptverb2,
                verb1: verb1,
                verb2: verb2,
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
                <h2>The Little Blank</h2>
                <Label htmlFor="noun1">Noun</Label>
                <Input name="noun1" value={noun1} placeholder="noun" onChange={(e) => setNoun1(e.target.value)} />
                <br />
                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />
                <Label htmlFor="ptVerb">Past-Tense Verb</Label>
                <Input name="ptVerb" value={ptverb1} placeholder="past-tense verb" onChange={(e) => setPTverb1(e.target.value)} />
                <br />
                <Label htmlFor="verb1">verb </Label>
                <Input name="verb1" value={verb1} placeholder="Verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />
                <Label htmlFor="adj2">Adjective </Label>
                <Input name="adj2" value={adj2} placeholder="adjective" onChange={(e) => setAdj2(e.target.value)} />
                <br />
                <Label htmlFor="verb2">Verb </Label>
                <Input name="verb2" value={verb2} placeholder="verb" onChange={(e) => setVerb2(e.target.value)} />
                <br />
                <Label htmlFor="adj3">Adjective </Label>
                <Input name="adj3" value={adj3} placeholder="adjective" onChange={(e) => setAdj3(e.target.value)} />
                <br />
                <Label htmlFor="quote">Quote </Label>
                <Input name="quote" value={quote} placeholder="quote" onChange={(e) => setQuote(e.target.value)} />
                <br />
                <Label htmlFor="ptverb2">Past-Tense Verb </Label>
                <Input name="ptverb2" value={ptverb2} placeholder="past-tense verb" onChange={(e) => setPTverb2(e.target.value)} />
                <br />
                <Label htmlFor="noun2">Noun </Label>
                <Input name="noun2" value={noun2} placeholder="noun" onChange={(e) => setNoun2(e.target.value)} />
                <br /> <br />
                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="The little blank" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                Once upon a time, there was a little {noun1}. This {noun1} was very {adj1} and never {ptverb1}. One day, their mother told them to {verb1}, but the {adj2} little {noun1} didn't want to {verb1}! Instead, they decided to {verb2}! 
                When their {adj3} mother learned of their disobedience, she told them "{quote}" and {ptverb2} then without any {noun2}. From that day forth, the {adj1} little {noun1} never disobeyed their mother to {verb2} again.
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm() : Mprompt()}
        </div>
    )
} 

export default Little;