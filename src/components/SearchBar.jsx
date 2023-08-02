import { useEffect, useState } from 'react'
import { getAllPlayers } from '../API'

export default function SearchBar({ players, setPlayers }) {
    const [player, setPlayer] = useState('');
    const [search, setSearch] = useState('');
    const [allPlayers, setAllPlayers] = useState('');

    useEffect(() => {
        async function fetchAllPlayers() {
            const response = await getAllPlayers(players);
            setAllPlayers(response);
        }
        fetchAllPlayers();
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        alert('To return clear search and hit enter')
        if (search === '') { setAllPlayers(allPlayers); return; }

        const filtered = [];

        players.forEach((searchedPlayer) => {
            if (searchedPlayer.name.toLowerCase().includes(search.toLowerCase())) {
                filtered.push(searchedPlayer)
            }
        })
        setPlayer(filtered);
    }
    // console.log({allPlayers})
    return (
        <div id='search'>
            Can't find your Pup?:
            <form onSubmit={handleSubmit}>
                <label>
                    <input value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search Puppies' />
                </label>
                <button className="enter">Search</button>
            </form>
        </div>
    )
}