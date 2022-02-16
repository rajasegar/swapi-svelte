<script>
 import { Router, Route } from 'svelte-routing';
 import Home from './routes/Home.svelte';
 import People from './routes/People.svelte';
 import Vehicles from './routes/Vehicles.svelte';
 import Planets from './routes/Planets.svelte';
 import Navbar from './Navbar.svelte';
 export let url = "";
</script>

<Router url="{url}">
	<Navbar/>
<main>
  <Route path="people/*" component="{People}" />
  <Route path="planets/*" component="{Planets}" />
  <Route path="vehicles/*" component="{Vehicles}" />
  <Route path="/" component="{Home}" />
</main>
</Router>

<style>





</style>
