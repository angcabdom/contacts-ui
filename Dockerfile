FROM nginx:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN npm run build

COPY build/ .

EXPOSE 3000

CMD npm start