<script>
  import { url, isActive } from "@roxi/routify";

  const brand = {name: 'Аутята', url: '/index'}
  const links = [
    // ['Крафт', '/craft']
  ]

</script>

<nav class="navbar is-dark is-mobile" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href={$url('./index')} > <strong>Аутята</strong> </a>
  </div>

  {#if links}
  <div class="navbar-menu">
    <div class="navbar-start">
      {#each links as [name, path]}
        <a class="navbar-item" class:is-active={$isActive(path)}  href={$url(path)}> {name} </a>
      {/each}
    </div>
  </div>
  {/if}
</nav>