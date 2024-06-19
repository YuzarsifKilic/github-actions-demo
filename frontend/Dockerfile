FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

ARG API_URL
ENV API_URL=$API_URL
RUN echo "window._env_ = {API_URL: '$API_URL'};" > /usr/share/nginx/html/env.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
