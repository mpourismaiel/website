<script>
  export let segment;
</script>

<style lang="scss">
  @import '../utils/theme';

  $linkColor: transparentize($primary, 0.35);
  $linkIconBackground: $white;

  nav {
    display: grid;
    margin-bottom: 20px;
    grid-template-columns:
      minmax(40px, 1fr)
      minmax(auto, 900px)
      minmax(40px, 1fr);
  }

  ul {
    grid-column: 2;
    padding: 20px 0;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid transparentize($primary, 0.7);

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }

  li {
    display: block;
    float: left;
    font-weight: bold;

    &:not(:first-of-type) {
      margin-left: 30px;
    }

    a {
      display: flex;
      align-items: center;
      transition: all 0.2s ease-out;
      color: $linkColor;

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        width: 28px;
        height: 28px;
        padding-top: 3px;
        box-sizing: border-box;
        background-color: transparentize($linkIconBackground, 0.85);
        border-radius: 4px;
        color: transparentize($primary, 0.3);
        transition: all 0.2s ease-out;
      }

      &[aria-current],
      &:hover,
      &:focus,
      &:active {
        color: var(--primary);
        text-shadow: 0 0 4px var(--primary);

        .icon {
          color: transparentize($primary, 0.1);
        }
      }
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <span class="icon">
          <i class="gg-home-alt" />
        </span>
        <span>Home</span>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        <span class="icon">
          <i class="gg-format-separator" />
        </span>
        <span>Blog</span>
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'books' ? 'page' : undefined}
        href="books">
        <span class="icon">
          <i class="gg-read" />
        </span>
        <span>Books</span>
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        <span class="icon">
          <i class="gg-user" />
        </span>
        <span>About</span>
      </a>
    </li>
  </ul>
</nav>
