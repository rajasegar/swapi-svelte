<script>
 import pMap from 'p-map';
 import { link } from 'svelte-routing';
 export let url;
 export let type;

 const items = [].concat(url);
    const mapper = url => {
      return fetch(url).then(r => r.json());
    };
    const models = items.map(i => {
      const temp = i.replace('https://swapi.dev/api/','');
      const [route,id] = temp.split('/');
      return {
        route: `${route}.show`,
        id: id
      };
    });

    let promise =  pMap(items, mapper, { concurrency: 4 }).then(values => {
      return values.map((m,index) => {
        return {
          id: models[index].id,
          name: m.name || m.title || 'Link'
        };
      });
    });
 


</script>
{#await promise}
  <p>Loading...</p>
{:then data} 
  {#each data as person}
    <a href="/{type}/{person.id}" use:link>{person.name}</a> 
    {/each}
{/await}
