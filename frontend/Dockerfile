# Stage 1: Build the Angular application
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ARG API_URL
ENV API_URL=${API_URL}

RUN npm run build -- --prod

# Create env.js file
RUN echo "window.env = { API_URL: '${API_URL}' };" > /app/dist/your-angular-app/assets/env.js

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
