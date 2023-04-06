FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . /app
RUN npm run build
ENV PORT=5000
EXPOSE 5000
CMD ["npm", "start"]