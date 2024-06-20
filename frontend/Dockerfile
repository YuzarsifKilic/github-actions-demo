# Angular uygulamanızın Dockerfile'ı
FROM node:14-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# NGINX konfigürasyon dosyasını değiştirme
COPY nginx.conf /etc/nginx/nginx.conf

# Environment Variables için template ve script dosyalarını kopyalama
COPY src/assets/env.template.js /usr/share/nginx/html/assets/env.template.js
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

CMD ["/docker-entrypoint.d/env.sh"]
