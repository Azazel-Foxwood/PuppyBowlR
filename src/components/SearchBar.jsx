import { useEffect, useState } from 'react'
import { getAllPlayers } from '../API'

export default function SearchBar ({ players, setPlayers }) {
// const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('');
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect (() => {
        async function fetchAllPlayers () {
            const response = await getAllPlayers();
            setAllPlayers(response);
        }
        fetchAllPlayers();
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        if (search === '') {setPlayers(allPlayers); return;}

        const filtered = [];

        players.forEach((singlePlayer) => {
            if (singlePlayer.name.toLowerCase().includes(search.toLowerCase())){
                filtered.push(singlePlayer)
            }
            if(singlePlayer.breed.toLowerCase().includes(search.toLowerCase())){
                filtered.push(singlePlayer)
            }
        })
        setPlayers(filtered);
    }
    // console.log({allPlayers})
    return (
        <div>

            <form onSubmit={handleSubmit}>
                Search for puppy
            <input value={search} onChange={(e) => setSearch(e.target.value)} required/>
            </form>
        </div>
    )
}