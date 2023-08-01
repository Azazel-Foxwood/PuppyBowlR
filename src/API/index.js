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

export async function addNewPlayer() { // GET /api/COHORT-NAME/players/]
    try {
        const response = await fetch(`${API}`, {
        method: "POST",
        body: JSON.stringify({name, breed }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
    //   window.location.reload();
      return result;
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  }