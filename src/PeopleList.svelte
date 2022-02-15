<script>
 import { link } from 'svelte-routing';
 let promise = fetch('https://swapi.dev/api/people').then(x => x.json());

 function getId(url) {
   return url.replace('https://swapi.dev/api/people/','');
 }
</script>
{#await promise}
  <h2>Loading, please wait...</h2>
{:then data} 
<div class="search-wrapper">
  <label for="search-box">Search:</label>
  <div class="search-box">
    <input type="text" id="search-box" class="search-field" />
    <button type="button" class="clear-button" >&times;</button>
  </div>
</div>

  <ul class="list">
  {#each data.results as people}
    <li><a href="/people/{getId(people.url)}" use:link>{people.name}</a></li>
  {/each}
  </ul>
{/await}


<style>
.list a {
  cursor: pointer;
  padding:0.5em 1em;
  display: block;
  color: var(--color-white);
  text-decoration: none;
}

.list a:hover {
  background: var(--color-burnt-ember);
}

.list a.active {
  background: var(--color-white);
  color: var(--color-ember);
}

.search-wrapper label {
  margin-left: 1em;
}

.search-box {
  display: grid;
  grid-template-columns: 240px 42px;
}

.search-field {
    padding: 1em;
    width: 240px;
    margin-left: 1em;
    border-radius: .25em;
    margin-bottom: 1em;
}

 .clear-button {
   float: right;
   font-size: 1.5em;
   height: 42px;
   width: 42px;
   border-radius: .25em;
   cursor: pointer;
   color: var(--color-burnt-ember);
 }
</style>
