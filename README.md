## How to run?

1. Clone the repo
2. Using terminal, `cd <address-to-this-repo-on-your-machine>`
3. Do following,

   ```sh
   pnpm install
   pnpm dev # access at http://localhost:5173
   ```

## What could go wrong?

### Risk 1

- Props mismatch between backend response and component prop structure.

#### Possible mitigation:

- Automated test suite that screams failure if a breaking change is made.
- Versioned components, without breaking any existing features, we could make use of versioning for each data item using which we could render legacy or new component.
- Error handling (also tracking) at component level which handles it gracefully without breaking other working pieces.
- Using good defaults for props so that components render (Not highly recommended but it should help in not breaking the entire app)

### Risk 2

- Rendering large number of complex components on the page

#### Possible mitigation

- Viewport based component loading and rendering, only fetch, parse and render components when users wants to scroll.
- Support data virtualisation where code related to components below the fold should not be loaded.
- In Vue 3.5+ for SSR apps, we could use lazy hydration [see more](https://vuejs.org/guide/components/async.html#lazy-hydration)

### Risk 3

- Rendering insecure user generated content

#### Possible mitigation

- Make sure html sanitization is in place before user generated content is rendered on the screen.
- Ensuring proper content security policies are in place, so that any 3rd party library OR user injected scripts are unable to execute and prevent access to private tokens

### Further improvements

- Create a design system which define atomic components in order to further create complex layouts/UI capabilities
- Split each complex component into separate chunks (Already took care of this using defineAsyncComponent)
- Use service-workers to cache per component chunks so that once cached, the perceived performance in subsequent visits is better.
- Of course, use better skeleton loaders
