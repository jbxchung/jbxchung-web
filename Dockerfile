# Stage 1 - build react app
FROM node:8-alpine as build

WORKDIR /app
RUN apk add python make gcc g++
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./

RUN npm run build


# Stage 2 - run server
FROM node:16-alpine

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY --from=build /app/dist /app/dist
COPY --from=build /app/public /app/public
COPY --from=build /app/server /app/server

RUN npm install --production

EXPOSE 17713
ENTRYPOINT [ "node", "./server/index.js"]
