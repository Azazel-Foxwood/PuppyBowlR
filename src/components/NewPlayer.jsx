import { useState } from "react";
import {addNewPlayer} from '../API';

export default function NewPlayerForm (){

    // const [search, setSearch] =useState('');
    const [name, setName] = useState([]);
    const [breed, setBreed] = useState([]);
    const [status, setStatus] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    // const [team, setTeam] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        const defualtImg = 'https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png';
        // {
        //     if (name === "" || breed === "") { alert("Name and/or breed is blank. Please fill out the information") }
        // }
        if (status === 'field' || status === 'bench' ){ await addNewPlayer(name, breed, status, imageUrl)
        }else {
            alert("Only enter 'field' or 'bench' ")
        }
        if (imageUrl === '') {
            setImageUrl(defualtImg)
        }
        // (imageUrl === '' || imageUrl === 'f'? setImageUrl("https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"): '')
        //     setStatus.toLowerCase()
        // }


}

    return( 
        <>
            <h2>Enter Your Pup to the Roaster</h2>
            <form id="newPlayer" method="post" onSubmit={handleSubmit}>
                <label id="name">
                    <div className="name">DOG NAME: {""} </div>
                    <input value={name} onChange={(e) => setName(e.target.value)} required/><br />
                </label>
                <label id="breed">
                    <div className="breed">BREED: {""}</div>
                    <input value={breed} onChange={(e) => setBreed(e.target.value)} required/>
                </label>

                <label id="image">
                    <div className="image">Image URL:</div>
                    <input value={imageUrl}  onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter Image URL"required/>
                </label>
                {/* <label id="team">
                    <div className="team">Team: </div>
                    <input value={team} onChange={(e) => setTeam(e.target.value)}/>
                </label> */}
                <label id="status">
                    <div className="status">Status:</div>
                    <input value={status} onChange={(e) => setStatus(e.target.value.toLowerCase())}
                    placeholder="Enter 'Field' or 'Bench'" 
                    title="Only enter 'field' or 'bench"
                    required/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}