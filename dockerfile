# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /usr/local/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:latest
COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html
EXPOSE 80
