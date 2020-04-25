<script>
  import Nav from '../components/Nav.svelte';

  export let segment;

  let darkMode = false;
</script>

<style lang="scss">
  $background: hsl(215, 75%, 99%);
  $accent: #624ce0;
  $text: #212c34;
  $info: #747272;
  $darkBackground: #0e0712;
  $darkAccent: #fb5600;
  $darkText: #f5f4f5;
  $darkInfo: #a8a7a7;

  :root {
    --background: #{$background};
    --accent: #{$accent};
    --lighterAccent: #{lighten($accent, 15)};
    --text: #{$text};
    --info: #{$info};

    --repositoryBorderColor: #d1d5da;
    --repositoryTitleColor: #0366d6;
    --repositoryInfo: #586069;

    --borderColor: #{lighten($accent, 10)};
    --navActiveColor: #{lighten($accent, 20)};
  }

  .container {
    &.dark {
      --background: #{$darkBackground};
      --accent: #{$darkAccent};
      --lighterAccent: #{lighten($darkAccent, 15)};
      --darkerAccent: #{darken($darkAccent, 15)};
      --text: #{$darkText};
      --info: #{$darkInfo};
      --borderColor: #{transparentize($darkAccent, 0.25)};
      --navActiveColor: #{transparentize($darkAccent, 0.25)};
    }

    background-color: var(--background);
    color: var(--text);
    width: 100vw;
    height: 100vh;
    overflow: auto;
    position: relative;
    transition: background-color 0.4s ease;
  }

  :global(.wrapper) {
    position: relative;
    max-width: 56em;
    padding: 0 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  main {
    padding: 2em;
  }

  // .switch {
  //   width: 48px;
  //   height: 48px;
  //   position: absolute;
  //   top: 5px;
  //   right: 16px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 12px;
  // }

  // label {
  //   cursor: pointer;
  //   padding: 1rem;
  //   position: relative;

  //   --bg-planet-bright: #f2c94c;
  //   --bg-planet-shadow: #828894;
  //   --bg-planet-lightshadow: #d7d7d820;
  //   --dot-size: 0.25rem;
  //   /* To make outline on mobile invisible */
  //   -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  //   input[type='checkbox'] {
  //     height: 0;
  //     width: 0;
  //     visibility: hidden;
  //     position: absolute;
  //   }

  //   .planet {
  //     width: 1.1rem;
  //     height: 1.1rem;
  //     border-radius: 50%;
  //     overflow: hidden;
  //     background: radial-gradient(3.75em, 99%, transparent 100%);
  //     background-color: var(--bg-planet-bright);
  //     background-repeat: no-repeat;
  //     position: relative;
  //     will-change: background;
  //     transition: all 400ms ease;

  //     /* Safari transition issue */
  //     backface-visibility: hidden;
  //     transform: translate3d(0, 0, 0);

  //     &::after {
  //       content: '';
  //       background-color: var(--bg-planet-shadow);
  //       width: 2rem;
  //       height: 2rem;
  //       position: absolute;
  //       border-radius: 50%;
  //       will-change: opacity, transform, background-color;
  //       opacity: 0;
  //       transform: translate(2em, -2em);
  //       transition: opacity 400ms ease, transform 400ms ease,
  //         background-color 400ms ease;
  //     }
  //   }

  //   .elements {
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     transition: transform 400ms ease;

  //     svg {
  //       position: absolute;
  //       width: 0.4375rem;
  //       height: 0.4375rem;
  //       opacity: 1;
  //       transition: transform 400ms ease, opacity 200ms ease, width 200ms ease,
  //         height 200ms ease;
  //       circle {
  //         fill: var(--bg-planet-bright);
  //         transition: fill 400ms ease;
  //       }
  //       &:first-child {
  //         transform: translate(1.8em, 0.35em);
  //       }
  //       &:nth-child(2) {
  //         transform: translate(2.8em, 0.7em);
  //       }
  //       &:nth-child(3) {
  //         transform: translate(3.2em, 1.8em);
  //       }
  //       &:nth-child(4) {
  //         transform: translate(2.8em, 2.8em);
  //       }
  //       &:nth-child(5) {
  //         transform: translate(1.8em, 3.2em);
  //       }
  //       &:nth-child(6) {
  //         transform: translate(0.7em, 2.8em);
  //       }
  //       &:nth-child(7) {
  //         transform: translate(0.35em, 1.8em);
  //       }
  //       &:nth-child(8) {
  //         transform: translate(0.7em, 0.7em);
  //       }
  //     }
  //   }

  //   input:checked {
  //     & + .planet {
  //       --bg-planet-bright: #d7d7d8;

  //       &::after {
  //         opacity: 1;
  //         transform: translate(0.6em, -0.5em);
  //       }
  //     }

  //     & ~ .elements {
  //       transform: rotate(180deg);

  //       svg {
  //         &:first-child {
  //           transform: translate(2em, 1em);
  //           opacity: 0;
  //         }
  //         &:nth-child(2) {
  //           transform: translate(3em, 1.5em);
  //           opacity: 0;
  //         }
  //         &:nth-child(3) {
  //           transform: translate(3em, 2em);
  //           opacity: 0;
  //         }
  //         &:nth-child(4) {
  //           transform: translate(3em, 2em);
  //           opacity: 0;
  //         }
  //         &:nth-child(5) {
  //           transform: translate(1.9em, 2.6em);
  //           width: 0.3em;
  //           height: 0.3em;
  //           circle {
  //             fill: var(--bg-planet-lightshadow);
  //           }
  //         }
  //         &:nth-child(6) {
  //           transform: translate(1.4em, 2.5em);
  //           width: 0.3em;
  //           height: 0.3em;
  //           circle {
  //             fill: var(--bg-planet-lightshadow);
  //           }
  //         }
  //         &:nth-child(7) {
  //           transform: translate(1.1em, 1.6em);
  //           width: 0.7em;
  //           height: 0.7em;
  //           circle {
  //             fill: var(--bg-planet-lightshadow);
  //           }
  //         }
  //         &:nth-child(8) {
  //           width: 0.45em;
  //           height: 0.45em;
  //           transform: translate(1.7em, 2.1em);
  //           circle {
  //             fill: var(--bg-planet-lightshadow);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
</style>

<div class="container" class:dark={darkMode}>
  <Nav {segment}>
    <!-- <span slot="switch" class="switch">
      <label>
        <input type="checkbox" bind:checked={darkMode} />
        <div class="planet" />
        <div class="elements">
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
          <svg
            version="1.1"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" />
          </svg>
        </div>
      </label>
    </span> -->
  </Nav>

  <main class="wrapper">
    <slot />
  </main>
</div>
