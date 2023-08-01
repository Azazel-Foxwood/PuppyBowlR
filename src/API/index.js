const cohort = "2302-acc-ct-web-pt-a";
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;

export async function allPlayers () {
        try {
                const response = await fetch(`${API}/players`)
                const result = await response.json();
                return result.data.players;
        } catch (error) {
            console.log(error);
        }
    }