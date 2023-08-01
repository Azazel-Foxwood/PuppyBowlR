import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {singlePlayer} from '../API';

export default function SinglePlayer(){
    const { id } = useParams();

    const [player, setPlayer] = useState([])
    useEffect(() => {
        async function getSinglePlayer () {
                const response = await singlePlayer(id);
                console.log(response);
                setPlayer(response);
                // (player.team.name ? player.team.name : '')
        }
        getSinglePlayer();
    }, []);
    return (
        <>
        
        <h1>{player.name}</h1>
        <img style={{height: "150px"}} src= {player.imageUrl}/>
        <h2>{player.breed}</h2>
        {player.status}<br/>
        {/* {player.team.name}; */}
        </>
    )
}