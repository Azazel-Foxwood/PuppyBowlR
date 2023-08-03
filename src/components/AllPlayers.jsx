import { useEffect} from 'react';
import { getAllPlayers, removePlayer } from '../API';
import { useNavigate } from 'react-router-dom';
import NewPlayerForm from './NewPlayer';
import SearchBar from './SearchBar';
// import DeletePlayer from './DeletePlayer';
import Header from './Header'

export default function AllPlayers({ players, setPlayers }) {
    

    useEffect(() => {
        async function fetchAllPlayers () {
                setPlayers(await getAllPlayers(setPlayers));
        }
        fetchAllPlayers();
    }, []); 

    const navigate = useNavigate();

    return (
        <>
        {/* <SearchBar setPlayers={setPlayers} players={players}/> */}
        <Header players={players} setPlayers={setPlayers}/><br/>
        <NewPlayerForm setPlayers={setPlayers}/>

        <div id='Allplayers'>

            {players.map((player, id) =>(
                <div id="player"key={id}>
                    <h3> 
                        {player.name}
                        </h3>
                    <img style={{height: "150px"}} alt={player.name}src ={player.imageUrl}></img>
                <div id='buttons'>
                    <div className='button'>
                    <button className='seeMore' onClick={() => {navigate(`/players/${player.id}`)}}>see more</button>
                    </div>
                    <button className='deleteButton' onClick={() => {{removePlayer(player.id)}}}>delete</button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}
