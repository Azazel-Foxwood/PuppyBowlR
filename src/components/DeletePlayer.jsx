import { useEffect } from "react";
import { removePlayer, getAllPlayers } from '../API';

export default function DeletePlayer({ players, setPlayers, player }){

    // useEffect (() => {
    //     async function fetchAllPlayers () {
    //         const response = await getAllPlayers();
    //         setPlayers(response);
    //     }
    //     fetchAllPlayers();
    // }, [setPlayers])

    useEffect(() => {
        async function byePlayer () {
            await removePlayer(player.id);
            getAllPlayers(setPlayers);
        }
        byePlayer();
    })
   console.log("trying")
//    return (
//     <>
//     {players.map((player, id) =>(
//         <div key={id}>
//         <button onClick={() => {removePlayer(player.id)}}>delete</button>
//         </div>
//     ))}
//     </>
//    )
}