<script>
 import { link } from 'svelte-routing';

 export let resource;

 const domain = 'https://swapi.dev/api';
 let promise = fetch(`${domain}/${resource}`).then(x => x.json());
 let timer;
 let showClear = false;
 let query = '';

 function getId(url) {
   return url.replace(`${domain}/${resource}/`,'');
 }

 function debounce() {
   clearTimeout(timer);
   timer = setTimeout(() => {
     promise = fetch(`${domain}/${resource}?search=${query}`).then(x => x.json());
     showClear = true;
   }, 750);
 }

 function reset() {
   query = '';
   showClear = false;
   promise = fetch(`${domain}/${resource}`).then(x => x.json());
 }

</script>
<div class="search-wrapper">
  <label for="search-box">Search:</label>
  <div class="search-box">
    <input bind:value={query} type="text" id="search-box" class="search-field" on:input={debounce} />
    {#if showClear}
    <button type="button" class="clear-button" on:click={reset} >&times;</button>
    {/if}
  </div>
</div>

{#await promise}
  <h3 class="loading">Loading...</h3>
{:then data} 

  <ul class="list">
  {#each data.results as item}
    <li><a href="/{resource}/{getId(item.url)}" use:link>{item.name}</a></li>
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
   z-index: 9;
 }

 .loading {
   padding: 1em;
 }
</style>
