# Stage 2: Serve the app with nginx
FROM nginx:latest
COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html
EXPOSE 80
