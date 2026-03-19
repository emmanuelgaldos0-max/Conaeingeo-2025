# Multi-stage build for Astro static site
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better layer caching
COPY package*.json ./
RUN npm ci

# Copy source and build static output
COPY . .
RUN npm run build

# Serve static files with nginx
FROM nginx:1.27-alpine

# Copy Astro build output
COPY --from=builder /app/dist /usr/share/nginx/html

# CapRover expects container to listen on this port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
