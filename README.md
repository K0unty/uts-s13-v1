# uts-s13-v1

> Section13 of from UTS. The atual assets will be in folder - [`PJASS`](./PJASS/). But actual work will be in these files. You will also install that

# [`Vite Plugin Checker`](https://vite-plugin-checker.netlify.app/)

Installation

```sh
npm i vite-plugin-checker -D
```

Contents of `vite.config.js`

```sh
// vite.config.js
import checker from 'vite-plugin-checker'
export default {
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
}
```
