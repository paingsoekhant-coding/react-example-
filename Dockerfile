FROM node:20.11.0-alpine3.19

WORKDIR /react-example

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]