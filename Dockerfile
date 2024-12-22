#Base Image
FROM node:latest

#Working Directory
WORKDIR /app

#Copy code to wd
COPY . /app

#Configuration
RUN npm i

#Run
CMD [ "node", "app.js"]