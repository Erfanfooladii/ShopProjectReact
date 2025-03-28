# Stage 1: install dependencies
FROM node:20-alpine

# Install git
RUN apk update && apk add git

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install -g vite

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

