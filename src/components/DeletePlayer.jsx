const cohort = "2302-acc-ct-web-pt-a";
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;

export async function removePlayer (playerId) {
    try {
      const response = await fetch(`${API}`,
        {
          method: 'DELETE',
        });
      const result = await response.json();
      window.location.reload();
      return result;
  
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };