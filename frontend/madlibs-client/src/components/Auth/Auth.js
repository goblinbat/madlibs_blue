// contains login and signup
import React, {useState} from 'react';

const Auth = (props) => {
    const [username, setUsername] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [login, setLogin] = useState(false);

    const title = () => {return login ? 'Login' : 'Signup'}

    const Signup = () => !login ? (
        <div>
            <label htmlFor='email'>Email: </label>
            <br/>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    ) : null

    const toggle = (e) => {
        e.preventDefault();
        setLogin(!login);
        setEmail(undefined);
        setPassword(undefined);
        setUsername(undefined);
    }

     const handleSubmit = (e) => {
        e.preventDefault();
        const url = login ? 'http://localhost:3000/auth/login' : 'http://localhost:3000/auth/signup';
        const user = login ? { user: {
            username: username,
            password: password
        }} : { user: {
            username: username,
            email: email,
            password: password
        }}

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.updateToken(json.sessionToken))
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{title()}</h1>
            <label htmlFor='username'>Username: </label>
            <br/>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br/><br/>
            {Signup()}
            <br/><br/>
            <label htmlFor='password'>Password: </label>
            <br/>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/><br/>
            <button type="submit">Submit</button>
            <br/><br/>
            <button onClick={(e) => toggle(e)}>{login ? <p>Switch to signup</p> : <p>Switch to login</p>}</button>
        </form>
    )
}

export default Auth;