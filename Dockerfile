FROM ghcr.io/puppeteer/puppeteer:latest

ENV XDG_CONFIG_HOME=/tmp/.chromium
ENV XDG_CACHE_HOME=/tmp/.chromium

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . . 

EXPOSE 4000

CMD ["npm", "start"]