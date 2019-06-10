FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean --force
RUN npm install
RUN npm install -g @angular/cli
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "start"]