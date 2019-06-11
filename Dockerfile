FROM node:10

WORKDIR /usr/src/app

RUN npm install pm2 -g

EXPOSE 4200

COPY dist dist

CMD ["pm2-runtime", "dist/server.js"]
