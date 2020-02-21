# Web setup

Monorepa based on [lerna](https://lerna.js.org/) and [yarn workspace](https://yarnpkg.com/lang/ru/docs/workspaces/)

## First deploy
1. ```npm install rimraf lerna -g```
1. ```yarn bootstrap```
1. add ```.env```

## Scripts
- ```yarn bootstrap``` deploy
- ```yarn ls``` list packages
- ```yarn dev``` run development on all packages
- ```yarn dev --scope packageName``` run development on define package
- ```yarn clean``` clean dependencies packages (does not touch root)

## Add package
- ```cp ./package/sample ./package/newPackage```
- edit name ```./package/newPackage/package.json```
- ```yarn bootstrap```
- ```yarn dev --scope newPackage```


## Dev dependencies
- ```node```
- ```yarn```
- ```typescript```
- ```lerna```
- ```parsel-bundler```

## Dependencies
- ```react```
- ```react-dom```
