FROM node:16.13.2-alpine

ENV NEXTAPP=/usr/src
WORKDIR $NEXTAPP

RUN apk update

COPY package.json $NEXTAPP/package.json
RUN npm install

COPY . $NEXTAPP
EXPOSE 3001

CMD [ "npm", "run", "dev" ]
