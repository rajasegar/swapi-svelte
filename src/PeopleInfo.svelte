<script>
 import { link } from 'svelte-routing';
 export let id;
 let promise;
 $: {
  promise = fetch(`https://swapi.dev/api/people/${id}`).then(x => x.json());
 }

</script>
{#await promise}
  <h2>Loading, please wait...</h2>
{:then data} 
  <h2>{data.name}</h2>

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
