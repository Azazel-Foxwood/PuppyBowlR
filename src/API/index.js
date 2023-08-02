const cohort = "2302-acc-ct-web-pt-a";
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;

export async function allPlayers () {
        try {
                const response = await fetch(`${API}`);
                const result = await response.json();
                return result.data.players;
        } catch (error) {
            console.log(error);
        }
    }

export async function singlePlayer (id) {
    try {
        const response = await fetch(`${API}/${id}`);
        const result = await response.json();
        return result.data.player;
    } catch (error) {
        console.error(error);
    }
}

export async function addNewPlayer(name, breed) {

    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-a/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, breed }),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}