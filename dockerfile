# Stage 1: Build the Angular app
FROM node:16 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:latest
COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html
EXPOSE 80
