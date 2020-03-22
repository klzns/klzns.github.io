---
date: "2020-03-22"
title: "How to setup Danger JS with GitHub Actions"
categories:
  - dangerjs
  - ci
  - github
---

Make sure you add danger as a devDependency:

```sh
yarn add danger -D
```

A `dangerfile.js` in the root directory. Example:

```js
// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes("changelog.md");
const isTrivial = (danger.github.pr.body + danger.github.pr.title).includes(
  "#trivial"
);

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.");
}
```

Lastly, creatte a workflow file at `.github/workflow/` and give it any name, example: `cy.yml`:

```yml
name: CI Pull Requests

on:
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Use Node.js 12.x
        uses: actions/setup-node@master
        with:
          node-version: 12.x

      - name: yarn install
        run: yarn install

      - name: Danger
        run: yarn danger ci
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
