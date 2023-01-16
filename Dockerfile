FROM node:lts-alpine

ADD . /app/
WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .env .env

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

EXPOSE 5173

CMD ["yarn", "prod"]