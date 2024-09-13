# EMC_MINER

electron forge + vite

## Getting Started

```bash

#====== For DEVELOP ============
# step1: install dependencies
yarn
# step2: start electron process
yarn start

#====== For PUBLISH ============
# step1: build vue-project 
yarn package

```

## package
```bash
# normal package
yarn make
# x64 package
yarn make:x64
```

## env
```bash
# dev
### /src/utils/env.ts
const environment = "development";
### forge.config.js
const env = "development";
### package.json
"name": "EMC-DEV",
"productName": "EMC-DEV",

# test
const environment = "test";
### 
const env = "test";
###
"name": "EMC-TEST",
"productName": "EMC-TEST",

# production
const environment = "production";
###
const env = "production";
###
"name": "EMC",
"productName": "EMC",

```