<script>
 import LinkToPage from "./LinkToPage.svelte";
 export let id;
 let promise;
 $: {
  promise = fetch(`https://swapi.dev/api/people/${id}`).then(x => x.json());
 }

 function getPlanetId(url) {
   url.replace('https://swapi.dev/api/planets/','');
 }

</script>
{#await promise}
  <h2>Loading, please wait...</h2>
{:then data} 
  <h2>{data.name}</h2>
  <table>
  <tr>
    <td>Height</td>
    <td>{data.height}</td>
  </tr>
  <tr>
    <td>Mass:</td>
    <td>{data.mass}</td>
  </tr>
  <tr>
    <td>Hair Color:</td>
    <td>{data.hair_color}</td>
  </tr>
  <tr>
    <td>Skin Color:</td>
    <td>{data.skin_color}</td>
  </tr>
  <tr>
    <td>Eye Color:</td>
    <td>{data.eye_color}</td>
  </tr>
  <tr>
    <td>Birth Year:</td>
    <td>{data.birth_year}</td>
  </tr>
  <tr>
    <td>Gender:</td>
    <td>{data.gender}</td>
  </tr>
  <tr>
    <td>Home world:</td>
    <td>
      <LinkToPage type="planets" url="{data.homeworld}"/>
    </td>
  </tr>
  <tr>
    <td>Films:</td>
    <!-- <td><LinkToPage @items={data.films} /></td> -->
  </tr>
  <tr>
    <td>Species:</td>
    <!-- <td><LinkToPage @items={data.species} /></td> -->
  </tr>
  <tr>
    <td>Vehicles:</td>
    <!-- <td><LinkToPage @items={data.vehicles} /></td> -->
  </tr>
  <tr>
    <td>Starships:</td>
    <!-- <td><LinkToPage @items={data.starships} /></td> -->
  </tr>
  </table>

{/await}


