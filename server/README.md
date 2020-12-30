# server

## LoopBack key concepts
*Prefix any of these with `lb4` to generate*
- Model
- Datasource
- Repository
- Service
- Controller


## Commands
*Run the application*
```sh
npm start
```
You can also run `node .` to skip the build step. Open http://127.0.0.1:3000 in your browser.

*To incrementally build the project*

```sh
npm run build
```

*To force a full build by cleaning up cached artifacts*

```sh
npm run rebuild
```

*Linting*

```sh
npm run lint
npm run lint:fix
```

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container
