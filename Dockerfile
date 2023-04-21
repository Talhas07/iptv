FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV development
COPY package*.json ./
RUN npm install

COPY . .

COPY .env ./

EXPOSE 2022

CMD [ "npm", "run", "dev" ]