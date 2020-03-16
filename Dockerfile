FROM node:10.15.3-slim@sha256:88da5cd281ece24309c4e6fcce000a8001b17804e19f94a0439954568716a668


WORKDIR /usr/src/app
COPY package*.json ./

#RUN npm install -g babel-cli
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "start"]