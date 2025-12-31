FROM ghcr.io/puppeteer/puppeteer:24.34.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=TRUE \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci 
COPY . . 
CMD ["node", "index.js"]