import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePlayer, removePlayer } from '../API';

export default function SinglePlayer() {
    const { id } = useParams();

    const [player, setPlayer] = useState([])
    useEffect(() => {
        async function fetchSinglePlayer() {
            const response = await getSinglePlayer(id);
            console.log(response);
            setPlayer(response);
            // (player.team.name ? player.team.name : '')
        }
        fetchSinglePlayer();
    }, []);

    const navigate = useNavigate();

    return (
        <div id="singlePlayer">

            <h2>{player.name}</h2>
            <img style={{ height: "13em" }} src={player.imageUrl} />
            <h3>{player.breed}</h3>
            <ul>
                <li className="created"><div className="joined">Joined:</div> <div className="time">{player.createdAt}</div></li>
                <li className="cohort"><div className="cohrt">Cohort:</div> <div className="classhort">{player.cohortId}</div></li>
                <li className="jersey"><div className="jers"> Jersey:</div> <div className="jersNum">#{player.id}</div></li>
                <li className="status"><div className="position">Position:</div> <div className="stat">{player.status}<br /></div></li>
                <li className="team"><div className="teem">Team:</div> <div className="teamName">{player.team ? (player.team.name) : 'NONE'}</div></li>
            </ul>
            <div id='buttons'>
                <button className='seeMore' onClick={() => { navigate(-1) }}>Return</button>
                <button className='deleteButton' onClick={() => { removePlayer(player.id); { navigate(-1) } }}>delete</button>
            </div>

            {/* {player.team.name}; */}
        </div>
    )
}