# svelte-tweakpane-ui

## Scratch

Renderless child ordering...

- https://github.com/sveltejs/svelte/issues/5381#issuecomment-690842511

Index files...

- https://github.com/sveltejs/kit/issues/2884

Advanced example...

- https://github.com/shinokada/svelte-lib-helpers
- https://flowbite-svelte.com

## Overview

A [Svelte](https://svelte.dev) component library for [Tweakpane](https://cocopon.github.io/tweakpane/).

## Variations on Tweakpane

Certain aspects of the Tweakpane API don't make a ton of sense in the Svelte context.

- [index](https://tweakpane.github.io/docs/misc/#insert) is not exposed. The order of controls appearance matches the component hierarchy.
- [visibility](https://tweakpane.github.io/docs/misc/#visibility) (e.g. `hidden`) is not exposed. Control the visibility of controls by adding / removing them from the component hierarchy.

### Tweakpane resources

- [Documentation](https://tweakpane.github.io/docs/)
- [API](https://tweakpane.github.io/docs/api/index.html)

### Other projects adapting Tweakpane to Svelte

- [svelte-tweakpane](https://github.com/pierogis/svelte-tweakpane) by [Karl Moore](https://pierogis.live)
- [svelte-gui](https://github.com/mattcroat/svelte-gui) by [Matija](https://matia.xyz/)

### Other projects adapting Tweakpane to reactive frameworks

- Solid: [solid-tweakpane](https://github.com/MrFoxPro/solid-tweakpane)
- React: [react-tweakpane](https://github.com/MelonCode/react-tweakpane)
- Vue: [v-tweakpane](https://github.com/vinayakkulkarni/v-tweakpane)

### Bundled & Integrated Plugins

- [Essentials](https://github.com/tweakpane/plugin-essentials)

### Plugin Integration Candidates

- https://github.com/0b5vr/tweakpane-plugin-rotation (🎛️v3 ⭐️×65)
- https://github.com/tweakpane/plugin-camerakit (🎛️v4 ⭐️×34)
- https://github.com/0b5vr/tweakpane-plugin-profiler (🎛️v3 ⭐️×25)
- https://github.com/donmccurdy/tweakpane-plugin-thumbnail-list (🎛️v3 ⭐️×26)
- https://github.com/panGenerator/tweakpane-textarea-plugin (🎛️v3 ⭐️×17)
- https://github.com/metehus/tweakpane-image-plugin (🎛️v3 ⭐️×15)
- https://github.com/ayamflow/tweakpane-image-plugin (🎛️v3 ⭐️×15)
- https://github.com/doersino/tweakpane-plugin-infodump (🎛️v3 ⭐️×12)
- https://github.com/brunoimbrizi/tweakpane-plugin-chromatic (🎛️v3 ⭐️×11)
- https://github.com/shoedler/tweakpane-plugin-waveform (🎛️v3 ⭐️×7)
- https://github.com/amir-arad/tweakpane-table (🎛️v3 ⭐️×6)
- https://github.com/hirohe/tweakpane-plugin-search-list (🎛️v3 ⭐️×6)
- https://github.com/mollerse/midi-control (🎛️v3 ⭐️×4 👀)
- https://github.com/leochocolat/tweakpane-plugin-media (🎛️v3 ⭐️×3)
- https://github.com/LuchoTurtle/tweakpane-plugin-file-import (🎛️v3 ⭐️×3 👀)
- https://github.com/brunoimbrizi/tweakpane-plugin-audio-player (🎛️v3 ⭐️×3)
- https://github.com/pierogis/tweakpane-plugin-grouplist (🎛️v3 ⭐️×1)
- https://github.com/vnvyvu/tweakpane-media (🎛️v3 ⭐️×0)
- https://github.com/IvanLi-CN/tweakpane-multiple-select-plugin (🎛️v3 ⭐️×0)

---

_Original Readme_

# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

`@sveltejs/package`?
