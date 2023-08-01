import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getSinglePlayer, removePlayer} from '../API';

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

    const navigate = useNavigate();

    return (
        <>
        
        <h1>{player.name}</h1>
        <img style={{height: "150px"}} src= {player.imageUrl}/>
        <h2>{player.breed}</h2>
        <p>Born: {player.createdAt}</p>
        <p>Cohort Team: {player.cohortId}</p>
        <p>Jersey Number: #{player.id}</p>
        {player.status}<br/>
        {player.team ? (<h2>{player.team.name}</h2>): null}
        <div id='buttons'>
            <button onClick={() => {navigate(-1)}}>Return</button>
            <button onClick={() => {removePlayer(player.id); {navigate(-1)}}}>delete</button>
        </div>

        {/* {player.team.name}; */}
        </>
    )
}