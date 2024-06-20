# Angular Dockerfile

# 1. Stage: Build Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NG_APP_API_URL
ENV NG_APP_API_URL=${NG_APP_API_URL}

RUN npm run build --prod

# 2. Stage: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/* /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
