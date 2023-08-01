import { useEffect} from 'react'
import { getAllPlayers } from '../API'
import { useNavigate } from 'react-router-dom';
import NewPlayerForm from './NewPlayer';
import SearchBar from './SearchBar'

export default function AllPlayers({ players, setPlayers }) {
    

    useEffect(() => {
        async function fetchAllPlayers () {
                const response = await getAllPlayers();
                console.log(response);
                setPlayers(response);
        }
        fetchAllPlayers();
    }, [setPlayers]); 

    const navigate = useNavigate();

    return (
        <>
        <SearchBar setPlayers={setPlayers} players={players}/>
        <NewPlayerForm/>
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
            
        </>
    )
}
