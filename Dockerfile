# Use lightweight Nginx image
FROM nginx:alpine

# Copy all frontend files into Nginx default html folder
COPY ./ /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
