FROM node:lts-alpine

ARG APP_ENV
ENV APP_ENV=$APP_ENV

ADD . /app/
WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .env.* .env.*

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

EXPOSE 5173 4001
# EXPOSE 4001

CMD yarn $APP_ENV && tail -f /dev/null