import { useState } from "react";
import {addNewPlayer} from '../API';

export default function NewPlayerForm (){

    const [name, setName] = useState([]);
    const [breed, setBreed] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        await addNewPlayer(name, breed);

}
    return( 
        <>
            <h2>enter new dog</h2>
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
                    if (name === "" || breed === "") { alert("Name and/or breed is blank. Please fill out the information") }
                }
                }>Submit</button>
            </form>
        </>
    )

}