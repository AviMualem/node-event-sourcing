FROM node:10-alpine
RUN npm install typescript -g
COPY . /app
WORKDIR /app
RUN npm install --only:production && tsc -p tsconfig.build.prod.json
RUN rm -r /app/src
EXPOSE 3000
CMD ["node", "dist/main.js"]