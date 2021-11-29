# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation / deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Installation and Initial Setup

- Run `npm install` to install project dependencies
- Rename `.env.template` to `.env` and modify the file contents based on your local setup

### Running Unit Test

- Run `npx jest` to run unit tests

### Test your Lambda Functions Locally

- `npx sls invoke local -f <function_name>`
- Specify parameter `--path <dir>/<file>.json` for input json data

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Deploy

- Run `npx sls deploy` to deploy this stack to AWS

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   │
│   ├── __tests__                       # Unit tests go here
│   │   ├── functions
│   │   │   └── hello.spec.ts           # `Hello` lambda unit test
│   │   │
│   │   └── libs
│   │       └── eventBridge.spec.ts     # EventBridge helpers unit test
│   │
│   ├── functions                       # Lambda configuration and source code folder
│   │   ├── hello
│   │   │   ├── handler.ts              # `Hello` lambda source code
│   │   │   ├── index.ts                # `Hello` lambda Serverless configuration
│   │   │   ├── mock.json               # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts               # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts                    # Import/export of all lambda configurations
│   │
│   └── libs                            # Lambda shared code
│       ├── eventBridge.ts              # EventBridge specific helpers
│       ├── handlerResolver.ts          # Sharable library for resolving lambda handlers
│       └── lambda.ts                   # Lambda middleware
│
├── .env                        # Environment variables
├── package.json
├── dotenv-config.ts            # Dotenv config file (for environment variables)
├── jest.config.ts              # Jest config file
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
└── tsconfig.paths.json         # Typescript paths
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`
