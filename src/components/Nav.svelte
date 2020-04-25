<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid var(--borderColor);
    font-weight: 300;
    padding: 0 1em;
    position: relative;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--navActiveColor);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-weight: bold;
    font-size: 18px;
    color: var(--accent);
  }
</style>

<nav>
  <div class="wrapper">
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Home
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          Blog
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'books' ? 'page' : undefined}
          href="books">
          Books
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          About
        </a>
      </li>
    </ul>
    <slot name="switch" />
  </div>
</nav>
