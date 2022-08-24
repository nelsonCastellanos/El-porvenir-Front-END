FROM node:16.17.0 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install 

COPY . ./
RUN npm run build

FROM nginx:1.22
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]