FROM nodesource/node:trusty

MAINTAINER Andrew Keig, andrew.keig@gmail.com


ADD package.json /tmp/package.json
RUN cd /tmp && npm install && npm install -g mocha
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src
 
EXPOSE 3000

CMD [ "npm", "start" ]