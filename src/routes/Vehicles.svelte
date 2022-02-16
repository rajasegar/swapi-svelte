<script>
 import { Router, Route } from 'svelte-routing';
 import VehicleInfo from "../VehicleInfo.svelte";
import ListComponent from '../ListComponent.svelte';

</script>
<div class="grid">
  <div class="left-panel">
    <ListComponent resource="vehicles" />
  </div>
  <div class="right-panel">
    <Router>
      <Route path="/:id" let:params>
	<VehicleInfo id="{params.id}"/>
      </Route>
      <Route path="/">
	<h2>Select a vehicle</h2>
      </Route>
    </Router>
  </div>
</div>

