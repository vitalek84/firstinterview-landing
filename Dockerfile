# Stage 1: Build the Vite app using a Node.js image
FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static files using a lightweight Nginx image
FROM nginx:alpine
# Copy the build output from the builder stage to Nginx's serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
