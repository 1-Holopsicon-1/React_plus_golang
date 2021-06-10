#Docker file for non-builded project
FROM node:14-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]

