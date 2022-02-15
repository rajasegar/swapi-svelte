<script>
 import { link } from 'svelte-routing';
</script>
<nav>
<ul>
  <li><a href="/" use:link>Home</a></li>
  <li><a href="planets" use:link>Planets</a></li>
  <li><a href="people" use:link >People</a></li>
</ul>
</nav>
<style>
  a {
  color: var(--color-white);
  text-decoration: none;
  }

  nav {
  border-bottom: 10px solid var(--color-ember);
  }
  nav ul {
  display:flex;
  background: var(--color-burnt-ember);
  align-items:start;
  }

  li {
  list-style: none;
  }

  nav ul li {
  height: 3em;
  }

  nav a, nav span {
  padding: 1em;
  line-height:3em;
  }

  nav a.active, nav a:hover {
  background: var(--color-ember);
  color: var(--color-white);
  }
</style>
