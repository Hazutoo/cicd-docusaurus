FROM nginx:mainline-alpine3.17-slim
COPY --from=build /my-website/build /usr/share/nginx/html

