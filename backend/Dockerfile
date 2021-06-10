#Dockerfile for backend
FROM golang:1.16.5-alpine
RUN mkdir /app
ADD .. /app/
WORKDIR /app
RUN go mod download
RUN go build -v
CMD ["/app/React_plus_golang"]