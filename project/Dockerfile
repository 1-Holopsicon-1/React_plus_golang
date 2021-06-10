#For directory build
FROM node:14-alpine
WORKDIR /app
COPY build /app/build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]