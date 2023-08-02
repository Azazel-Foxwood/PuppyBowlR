import { useEffect, useState } from 'react'
import { getAllPlayers } from '../API'
import SinglePlayer from './SinglePlayer';

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

    //function handleSubmit(e) {
       // e.preventDefault();
        // alert('To return clear search and hit enter')
        // if (search === '') {setPlayers(allPlayers); return;}

        // const filtered = [];
    const searchParam = search ? allPlayers.filter((singlePlayer) => singlePlayer.name.toLowerCase().includes(search)) : allPlayers
            // if (singlePlayer.name.toLowerCase().includes(search.toLowerCase())){
            //     filtered.push(singlePlayer)
            // }
     console.log(searchParam)
        // setAllPlayers(filtered);
   // }
    // console.log({allPlayers})
    return (
        <div id='search'>
Can't find your Pup?:
            <form >
                <label> Search: {" "}
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Puppies' />
                </label>
                {/* <button className="enter">Search</button> */}
                {searchParam.map((player) => {
                    // console.log(player, "here")
                   // return <SinglePlayer key={player.id}  player={player}/>
                }) 
            }
            </form>
        </div>
    )
}