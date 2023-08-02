import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getSinglePlayer} from '../API';

export default function SinglePlayer(){
    const { id } = useParams();

    const [player, setPlayer] = useState([])
    useEffect(() => {
        async function fetchSinglePlayer () {
                const response = await getSinglePlayer(id);
                console.log(response);
                setPlayer(response);
                // (player.team.name ? player.team.name : '')
        }
        fetchSinglePlayer();
    }, [id]);
    return (
        <>
        
        <h1>{player.name}</h1>
        <img style={{height: "150px"}} src= {player.imageUrl}/>
        <h2>{player.breed}</h2>
        <p>Born: {player.createdAt}</p>
        <p>{player.cohortId}</p>
        <p>Jersey Number: #{player.id}</p>
        {player.status}<br/>
        {player.team ? (<h2>{player.team.name}</h2>): null}

        {/* {player.team.name}; */}
        </>
    )
}