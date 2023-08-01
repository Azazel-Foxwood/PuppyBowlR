import {useState, useEffect} from 'react'
import { allPlayers } from '../API'

export default function AllPlayers() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        async function getAllPlayers () {
                const response = await allPlayers();
                console.log(response);
                setPlayers(response);
        }
        getAllPlayers();
    }, []); 

    return (
        <>
            {players.map((all, id) =>(
                <div key={id}>{all.name}
                {/* <img src ={all.imageUrl}></img> */}
                </div>
            ))}
            <h1>🥲</h1>
        </>
    )
}
