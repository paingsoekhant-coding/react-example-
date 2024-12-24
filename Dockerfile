FROM node:20.11.0-alpine3.19
WORKDIR /react-example
COPY . .
RUN npm install