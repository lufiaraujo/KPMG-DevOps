FROM node:18

ENV API_SERVER=http://todo-api/

COPY . /home/

WORKDIR /home/todo-app

CMD -p npm install

EXPOSE 3000

CMD [ "node", "index.js" ]