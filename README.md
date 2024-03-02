# VueJS in Docker

<img width="817" alt="appsc" src="https://github.com/yvobogers/vueindocker/assets/21970585/21e16c45-c86a-447f-912b-134f5e11230d">

A simple VueJS app that runs in Docker, with a frontend that redirects the user to a Keycloak login page, and calls a coinbase API endpoint with fetch when you click a button. Still some bugs but the basic idea works. Had some help from https://mherman.org/blog/dockerizing-a-vue-app/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To run in Docker
```
docker build -t yvo_vue1_dockerized .
docker run  -p 8081:8080 -v ${PWD}:/app -v /app/node_modules --rm --name yvo_vue1_dockerized yvo_vue1_dockerized
```
