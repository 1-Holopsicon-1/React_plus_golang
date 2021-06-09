FROM golang:1.15.6
RUN mkdir /app
ADD .. /app/
WORKDIR /app
RUN go mod download
RUN go build -v
RUN dir
CMD ["/app/React_plus_golang"]