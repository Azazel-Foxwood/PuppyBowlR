import {useState, useEffect} from 'react'
import { allPlayers } from '../API'
import { useNavigate } from 'react-router-dom';
import SinglePlayer from './SinglePlayer';

export default function AllPlayers() {
    const [players, setPlayers] = useState([])

    // function handleClick(){
        
    //     console.log('click')
    // }
    useEffect(() => {
        async function getAllPlayers () {
                const response = await allPlayers();
                console.log(response);
                setPlayers(response);
        }
        getAllPlayers();
    }, []); 

    const navigate = useNavigate();

    return (
        <>
            {players.map((all, id) =>(
                <div key={id}>
                    <h1>
                        {all.name}
                        </h1>
                <img style={{height: "150px"}} src ={all.imageUrl}></img>
                <button onClick={() => {navigate(`/players/${all.id}`)}}>see more</button>
                </div>
            ))}
            {/* <button onClick={() => navigate(`/${all.id}`)}>see more</button> */}
            <h1>🥲</h1>
        </>
    )
}
