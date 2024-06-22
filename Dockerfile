FROM node:18-alpine

WORKDIR /almeno-coursera/

COPY public/ /almeno-coursera/public
COPY src/ /almeno-coursera/src
COPY package.json /almeno-coursera/

RUN npm install

CMD ["npm", "start"]