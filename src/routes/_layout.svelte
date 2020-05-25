<script>
  import Nav from '../components/Nav.svelte';

  export let segment;

  let darkMode = false;
</script>

<style lang="scss">
  @import '../utils/theme';

  :root {
    --primary: #{$primary};
    --dark: #{$dark};
    --muted: #{$muted};
    --white: #{$white};
  }

  .body {
    background-color: #0d0d0d;
    height: 100vh;
    overflow-y: auto;
    background-size: 60px 60px;
    background-image: radial-gradient(rgba(210, 203, 201, 0.1) 1px, transparent 1px), radial-gradient(rgba(210, 203, 201, 0.15) 1px, transparent 1px);
    background-position: 0 0, 30px 30px;
}
</style>

<div class="body" class:dark={darkMode}>
  <Nav {segment} />
  <main>
    <slot />
  </main>
</div>
