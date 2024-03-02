###
### YB 2024-02-29 First version based on https://mherman.org/blog/dockerizing-a-vue-app/
###

# base image
FROM node:21.6.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli keycloak-js

# start app
CMD ["npm", "run", "serve"]

