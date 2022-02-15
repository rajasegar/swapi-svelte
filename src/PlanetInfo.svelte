<script>
 import LinkToPage from "./LinkToPage.svelte";
 export let id;
 let promise;
 $: {
   promise = fetch(`https://swapi.dev/api/planets/${id}`).then(x => x.json());
 }

 function getPlanetId(url) {
   url.replace('https://swapi.dev/api/planets/','');
 }

 function formatDiameter(value) {
   if (value === undefined) {
     return "";
   } else {
     const parsedValue = parseInt(value);
     if (isNaN(parsedValue)) {
       return value;
     } else {
       return `${value} Kilometers (${value * 0.621371} Miles)`;
     }
   }
 }

 // copied from stack overflow
function abbrNum(number, decPlaces = 2) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  const abbrev = ["k", "m", "b", "t"];
  let newNumber = number;

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= newNumber) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      newNumber = Math.round((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (newNumber == 1000 && i < abbrev.length - 1) {
        newNumber = 1;
        i++;
      }

      // Add the letter for the abbreviation
      newNumber += abbrev[i];

      // We are done... stop
      break;
    }
  }
  return newNumber;
 }
 
 function formatPopulation(value) {
   if (value === undefined) {
     return "";
   } else {
     const parsedValue = parseInt(value);
     if (isNaN(parsedValue)) {
       return value;
     } else {
       return abbrNum(value);
     }
   }
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
    <!-- <td><LinkToPage @items={data.films} /></td> -->
  </tr>
  </table>
  
  

{/await}


