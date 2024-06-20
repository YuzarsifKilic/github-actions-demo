# Temel görüntü olarak Node.js kullanıyoruz (LTS sürümü önerilir)
FROM node:18-alpine

# Uygulama dizinini oluşturuyoruz
WORKDIR /app

# Angular uygulamasının kaynak kodunu kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları kuruyoruz
RUN npm ci

# Angular uygulamasının kaynak kodunu kopyalıyoruz
COPY . .

# Uygulamayı üretim modunda oluşturuyoruz
RUN npm run build --prod

# Üretim çıktı dizinini belirliyoruz
WORKDIR /app/dist/angular-app

# HTTP sunucusu olarak Nginx kullanıyoruz
FROM nginx:latest

# Nginx yapılandırma dosyasını kopyalıyoruz
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular uygulamasının statik dosyalarını kopyalıyoruz
COPY . /usr/share/nginx/html

# Nginx'i başlatıyoruz
CMD ["nginx", "-g", "daemon off;"]
