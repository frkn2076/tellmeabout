FROM node:10-alpine

WORKDIR /app

COPY package.json /app

RUN npm install -g babel-cli

RUN npm install

COPY . /app

EXPOSE 3000

RUN npm run babel-checkversion

CMD npm run prod
