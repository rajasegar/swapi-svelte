<script>
 import LinkToPage from "./LinkToPage.svelte";
 export let id;
 let promise;
 $: {
   promise = fetch(`https://swapi.dev/api/vehicles/${id}`).then(x => x.json());
 }
 

</script>
{#await promise}
  <h2>Loading, please wait...</h2>
{:then data} 
  <h2>{data.name}</h2>

  <table>
  <tr>
    <td>Model:</td>
    <td>{data.model}</td>
  </tr>
  <tr>
    <td>Vehicle Class:</td>
    <td>{data.vehicle_class}</td>
  </tr>
  <tr>
    <td>Manufacturer:</td>
    <td>{data.manufacturer}</td>
  </tr>
  <tr>
    <td>Length:</td>
    <td>{data.length}</td>
  </tr>
  <tr>
    <td>Cost in credits:</td>
    <td>{ data.cost_in_credits}</td>
  </tr>
  <tr>
    <td>Crew:</td>
    <td>{data.crew}</td>
  </tr>
  <tr>
    <td>Passengers:</td>
    <td>{data.passengers}</td>
  </tr>
  <tr>
    <td>Max. Atmosphering Speed:</td>
    <td>{data.max_atmosphering_speed}</td>
  </tr>
  <tr>
    <td>Cargo capacity:</td>
    <td>{data.cargo_capacity}</td>
  </tr>
  <tr>
    <td>Consumables:</td>
    <td>{data.consumables}</td>
  </tr>
  <tr>
    <td>Films:</td>
    <td><LinkToPage type="films" url={data.films} /></td>
  </tr>
  <tr>
    <td>Pilots:</td>
    <td><LinkToPage type="people" url={data.pilots} /></td>
  </tr>
  </table>
  
   

{/await}


