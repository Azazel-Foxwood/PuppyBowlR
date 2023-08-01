import SearchBar from "./SearchBar"


export default function Header ({ players, setPlayers }) {
    return (
        <header>
            <SearchBar setPlayers={setPlayers} players={players}/>
        </header>
    )
}