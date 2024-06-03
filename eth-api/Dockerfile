FROM node:20

WORKDIR /eth-api

COPY . .

RUN npm i
RUN npm i -g @nestjs/cli

CMD npm run start