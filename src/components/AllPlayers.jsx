import {useState, useEffect} from 'react'
import { allPlayers } from '../API'

export default function AllPlayers() {
    const [players, setPlayers] = useState('')

    useEffect(() => {
        async function getAllPlayers () {
            
            try {
                
                const players = await allPlayers();
                console.log(players);
                setPlayers(players);
                
            } catch(error) {
                console.error(error);
            }
        }
        getAllPlayers();
    }); 

    return (
        <>
            {/* {players.map((allPlayer) =>{
                return (
                    {allPlayer}
                )
            })} */}

        </>
    )
}
