FROM node:13
WORKDIR /app
COPY . /app
RUN npm install
RUN npm start
EXPOSE 3000
