# Stage 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ARG API_URL
ENV API_URL=${API_URL}

# Hata ayıklama için environment değişkenlerini yazdırma
RUN echo "Building with API_URL: ${API_URL}"

# Build işlemi
RUN npm run build --prod

RUN ls -la

RUN pwd

# Create env.js file
RUN mkdir -p /app/dist/frontend/browser/assets && echo "window.env = { API_URL: '${API_URL}' };" > /app/dist/frontend/browser/assets/env.js

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Copy custom nginx configuration


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
