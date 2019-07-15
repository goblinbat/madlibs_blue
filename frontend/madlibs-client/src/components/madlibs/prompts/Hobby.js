import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Hobby = (props) => {
    const [prompt, setPrompt] = useState(props.prompt); // determines whether form or prompt will show

    const [verb1, setVerb1] = useState('');
    const [number1, setNumber1] = useState('');
    const [noun1, setNoun1] = useState('');
    const [adj1, setAdj1] = useState('');
    const [name, setName] = useState('');
    const [adverb, setAdverb] = useState('');
    const [ingVerb, setIngVerb] = useState('');
    const [bodypart, setBodypart] = useState('');
    const [verb2, setVerb2] = useState('');
    const [savedAs, setSavedAs] = useState('The Blank Who Liked to Blank')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/madlib/', {
            method: 'POST',
            body: JSON.stringify({
                keyphrase: 'Hobby',
                savedAs: savedAs,
                verb1: verb1,
                number1: number1,
                noun1: noun1,
                adj1: adj1,
                name: name,
                adverb: adverb,
                ingVerb: ingVerb,
                bodypart: bodypart,
                verb2: verb2
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
                <h2>The Blank Who Liked to Blank</h2>
                <Label htmlFor="verb1">verb </Label>
                <Input name="verb1" value={verb1} placeholder="Verb" onChange={(e) => setVerb1(e.target.value)} />
                <br />
                <Label htmlFor="number">Number </Label>
                <Input name="number" value={number1} placeholder="number" onChange={(e) => setNumber1(e.target.value)} />
                <br />
                <Label htmlFor="noun1">Noun</Label>
                <Input name="noun1" value={noun1} placeholder="noun" onChange={(e) => setNoun1(e.target.value)} />
                <br />
                <Label htmlFor="adj1">Adjective</Label>
                <Input name="adj1" value={adj1} placeholder="adjective" onChange={(e) => setAdj1(e.target.value)} />
                <br />
                <Label htmlFor="name1">Name</Label>
                <Input name="name1" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <Label htmlFor="adverb">Adverb </Label>
                <Input name="adverb" value={adverb} placeholder="adverb" onChange={(e) => setAdverb(e.target.value)} />
                <br />
                <Label htmlFor="ingVerb">Verb ending in -ing</Label>
                <Input name="ingVerb" value={ingVerb} placeholder="verb ending in -ing" onChange={(e) => setIngVerb(e.target.value)} />
                <br />
                <Label htmlFor="verb2">Verb </Label>
                <Input name="verb2" value={verb2} placeholder="verb" onChange={(e) => setVerb2(e.target.value)} />
                <br />
                <Label htmlFor="bodypart">Body Part </Label>
                <Input name="bodypart" value={bodypart} placeholder="Body Part" onChange={(e) => setBodypart(e.target.value)} />
                <br /> <br />
                <Label htmlFor="savedAs">Save As: </Label>
                <Input name="savedAs" value={savedAs} placeholder="The Blank Who Liked to Blank" onChange={(e) => setSavedAs(e.target.value)} />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

    const Mprompt = () => {
        return (
            <div>
                Once upon a time, there were {number1} {noun1}. Of those, only one was {adj1}. This {noun1} was named {name}, and he liked to {verb1}. Every day, he would {adverb} {verb1} before even {ingVerb} his {bodypart}! Eventually, all his friends got fed up with his incessant {verb1}ing, and they issued an ultimatum: stop {verb1}ing or they would {verb2} him. {name} tried to stop, but ultimately couldn't help but {verb1}. His friends then made good on their threat and {i}ed him.
            </div>
        )
    }

    return (
        <div>
            {(!prompt) ? fillForm : Mprompt}
        </div>
    )
} 

export default Hobby;