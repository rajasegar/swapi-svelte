<script>
 import { Router, Route } from 'svelte-routing';
 import PlanetInfo from "../PlanetInfo.svelte";
 /* import PlanetList from "../PlanetList.svelte"; */
import ListComponent from '../ListComponent.svelte';

</script>
<div class="grid">
  <div class="left-panel">
    <ListComponent resource="planets" />
  </div>
  <div class="right-panel">
    <Router>
      <Route path="/:id" let:params>
	<PlanetInfo id="{params.id}"/>
      </Route>
      <Route path="/">
	<h2>Select a planet</h2>
      </Route>
    </Router>
  </div>
</div>

