<script>
 import { Router, Route } from 'svelte-routing';
import PeopleInfo from "../PeopleInfo.svelte";
import PeopleList from "../PeopleList.svelte";

</script>
<div class="grid">
  <div class="left-panel">
    <PeopleList/>
  </div>
  <div class="right-panel">
    <Router>
      <Route path="/:id" let:params>
	<PeopleInfo id="{params.id}"/>
      </Route>
      <Route path="/">
	<h2>Select a person</h2>
      </Route>
    </Router>
  </div>
</div>
