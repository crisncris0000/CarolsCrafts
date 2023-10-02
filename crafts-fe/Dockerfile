FROM node:17-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
