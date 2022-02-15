<script>
 import { Router, Route } from 'svelte-routing';
 import PlanetInfo from "../PlanetInfo.svelte";
 import PlanetList from "../PlanetList.svelte";

</script>
<div class="grid">
  <div class="left-panel">
    <PlanetList/>
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

