<script context="module">
  export function preload() {
    return this.fetch(`repositories.json`)
      .then(res => res.json())
      .then(repositories => ({
        repositories,
      }));
  }
</script>

<script>
  export let repositories;

  $: console.log(repositories);
</script>

<h1>Repositories</h1>
