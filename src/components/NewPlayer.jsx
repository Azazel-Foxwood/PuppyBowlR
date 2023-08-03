import { useState } from "react";
import {addNewPlayer} from '../API';


export default function NewPlayerForm (){
    
    const [name, setName] = useState([]);
    const [breed, setBreed] = useState([]);
    const [status, setStatus] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (status === 'field' || status === 'bench' )
        { await addNewPlayer(name, breed, status, imageUrl)
        }else {
            alert("Only enter 'field' or 'bench' ")
        }
}
    
    return( 
        <div id="newPlayer">
            <h2>Enter Your Pup to the Roaster</h2>
            <form className="newPlayer" method="post" onSubmit={handleSubmit}>
                <label id="name">
                    <div className="name">Dog Name: {""} </div>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name" required/><br />
                </label>
                <label id="breed">
                    <div className="breed">Breed: {""}</div>
                    <input value={breed} onChange={(e) => setBreed(e.target.value)}
                    placeholder="Enter Breed" required/>
                </label>
                <label id="image">
                    <div className="image">Image URL:</div>
                    <input value={imageUrl}  onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter Image URL"required/>
                </label>
                <label id="status">
                    <div className="status">Status:</div>
                    <input value={status} onChange={(e) => setStatus(e.target.value.toLowerCase())}
                    maxLength={5}
                    placeholder="Enter 'Field' or 'Bench'" 
                    title="Only enter 'field' or 'bench"
                    required/>
                </label>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}