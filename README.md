# awesome-javascript

## Getting Started

### Prerequisites

Required | Description
--|--
[Git](https://git-scm.com/) | We follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
[Node.js](nodejs.org) | 10.15.0 LTS
[Yarn](https://yarnpkg.com/lang/en/) | 1.12.3 or above

### Install Node, Yarn

The project manages the version of node through `nvm`.

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ command -v nvm
$ nvm install 10.15.0
$ which node
$ npm install -g yarn
```

In the project root as follows are performed through the `.nvmrc`

```
$ nvm use
...
```

## Yarn CLIs

### Install project

```bash
$ nvm use
$ yarn install
```

### Test

```bash
$ yarn test
```