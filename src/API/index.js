const cohort = "2302-acc-ct-web-pt-a";
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;

export async function getAllPlayers() {
    try {
        const response = await fetch(`${API}`);
        const result = await response.json();
        return result.data.players;
        
    } catch (error) {
        console.log(error);
    }
}

export async function getSinglePlayer(id) {
    try {
        const response = await fetch(`${API}/${id}`);
        const result = await response.json();
        return result.data.player;
    } catch (error) {
        console.error(error);
    }
}

export async function addNewPlayer(name, breed, status, imageUrl) {
    try {
        const response = await fetch(`${API}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, breed, status, imageUrl}),
        });
        await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function removePlayer(id) {

    try {
        const response = await fetch(`${API}/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.warn(result)
    } catch (error) {
        console.error(error);
    }
}