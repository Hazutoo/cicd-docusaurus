FROM node:20-alpine3.16 AS build
LABEL description="My documentation build with web server"
WORKDIR /my-website
COPY ./my-website /my-website
RUN addgroup -S app && adduser -S app -G app && \
    chown -R app:app /my-website && \
    npm install && npm run build

USER app

FROM nginx:mainline-alpine3.17-slim
COPY --from=build /my-website/build /usr/share/nginx/html