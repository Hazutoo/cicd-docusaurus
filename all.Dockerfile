# Historical learning example (2023); dependencies/base images are not maintained.
FROM node:20-alpine3.16 AS build

WORKDIR /my-website
COPY ./my-website/package*.json ./
RUN npm ci
COPY ./my-website/ ./
RUN npm run build

FROM nginx:mainline-alpine3.17-slim
COPY --from=build /my-website/build/ /usr/share/nginx/html/
