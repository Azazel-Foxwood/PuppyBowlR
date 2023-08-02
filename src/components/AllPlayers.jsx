import { useEffect} from 'react';
import { getAllPlayers, removePlayer } from '../API';
import { useNavigate } from 'react-router-dom';
import NewPlayerForm from './NewPlayer';
import SearchBar from './SearchBar';
// import DeletePlayer from './DeletePlayer';

export default function AllPlayers({ players, setPlayers }) {
    

    useEffect(() => {
        async function fetchAllPlayers () {
                setPlayers(await getAllPlayers());
        }
        fetchAllPlayers();
    }, [setPlayers]); 

    const navigate = useNavigate();

    return (
        <>
        <SearchBar setPlayers={setPlayers} players={players}/>
        <NewPlayerForm/>
        <div id='Allplayers'>
            {players.map((player, id) =>(
                <div key={id}>
                    <h1>
                        {player.name}
                        </h1>
                <img style={{height: "150px"}} src ={player.imageUrl}></img>
                <button onClick={() => {navigate(`/players/${player.id}`)}}>see more</button>
                <button onClick={() => {removePlayer(player.id)}}>delete</button>
                </div>
            ))}
            </div>
        </>
    )
}
