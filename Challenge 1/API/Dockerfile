FROM node:18

ENV DB_SERVER=mongodb://admin:private@mongodb/

COPY . /home/

WORKDIR /home/todo-api

CMD -p npm install

EXPOSE 3001

CMD [ "node", "index.js" ]