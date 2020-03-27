FROM node:10

WORKDIR /app

COPY package.json /app

RUN npm install -g babel-cli@^7.0.0

RUN npm install

COPY . /app

EXPOSE 3000

RUN npm run babel-checkversion

CMD npm run prod
