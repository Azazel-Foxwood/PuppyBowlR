import { useEffect } from "react";
import { removePlayer } from '../API';

export default function DeletePlayer({ players, setPlayers }){

    useEffect(() => {
        async function byePlayer () {
            const response = await removePlayer();
            console.log(response)
            setPlayers(response)
        }
        byePlayer();
    })
   console.log("trying")
}