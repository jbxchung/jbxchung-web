FROM node:latest as build

WORKDIR /app
RUN apt-get install python3
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build



FROM alpine:latest

WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/public /app/public

EXPOSE 17713
ENTRYPOINT [ "node ./server/index.js" ]
