import { useState, useEffect } from "react";
import {addNewPlayer} from '../API';

export default function NewPlayerForm (){

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [player, setPlayer] =useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("I'm tired of this grandpa")
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-a/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, breed }),
            });
            const result = await response.json();
            console.log(result);
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
}
    return( 
        <>
            <h2>Sign Up Today!</h2>
            {/* {successMessage && <p>{successMessage}</p>} */}
            {error && <p>{error}</p>}
            <form method="post" onSubmit={handleSubmit}>
                <label id="name">
                    <div className="uss">DOG NAME: {""} </div>
                    <input value={name} onChange={(e) => setName(e.target.value)} required/><br />
                </label>
                <label id="breed">
                    <div className="bree">BREED: {""}</div>
                    <input value={breed} onChange={(e) => setBreed(e.target.value)}required />
                </label>
                <button onClick={() => {
                    if (name === "" || breed === "") { alert("Username and/or Password is blank. Please fill out the information") }
                }
                }>Submit</button>
            </form>
        </>
    )

}