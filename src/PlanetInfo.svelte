<script>
 import LinkToPage from "./LinkToPage.svelte";
 import formatDiameter from './lib/formatDiameter';
 import formatPopulation from './lib/formatPopulation';
 
 export let id;
 let promise;
 $: {
   promise = fetch(`https://swapi.dev/api/planets/${id}`).then(x => x.json());
 }


</script>
{#await promise}
  <h2>Loading, please wait...</h2>
{:then data} 
  <h2>{data.name}</h2>

  <table>
  <tr>
    <td>Diameter:</td>
    <td>{formatDiameter(data.diameter)}</td>
  </tr>
  <tr>
    <td>Rotation Period:</td>
    <td>{data.rotation_period}</td>
  </tr>
  <tr>
    <td>Orbital Period:</td>
    <td>{data.orbital_period}</td>
  </tr>
  <tr>
    <td>Gravity:</td>
    <td>{data.gravity}</td>
  </tr>
  <tr>
    <td>Population:</td>
    <td>{formatPopulation(data.population)}</td>
  </tr>
  <tr>
    <td>Climate:</td>
    <td>{data.climate}</td>
  </tr>
  <tr>
    <td>Terrain:</td>
    <td>{data.terrain}</td>
  </tr>
  <tr>
    <td>Surface water:</td>
    <td>{data.surface_water}</td>
  </tr>
  <tr>
    <td>Residents:</td>
    <td><LinkToPage type="people" url={data.residents} /></td>
  </tr>
  <tr>
    <td>Films:</td>
    <td><LinkToPage type="films" url="{data.films}"/></td>
  </tr>
  </table>
  
  

{/await}


