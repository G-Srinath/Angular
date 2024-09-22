# Stage 2: Serve app with nginx
FROM nginx:latest
# Copy the build output from the first stage to the nginx html directory
COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80
