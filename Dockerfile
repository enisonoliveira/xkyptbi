FROM node:12-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . .

# check files list
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 4000

CMD [ "node", "./build/server.js" ]