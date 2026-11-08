FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production DB_PATH=/data/portfolio.db
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN mkdir -p /data && chown -R node:node /data /app
USER node
EXPOSE 3000
CMD ["node", "server.js"]
