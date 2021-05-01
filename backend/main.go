package main

import (
	"./pkg/websocket"
	"fmt"
	"log"
	"net/http"
)

func serveWS(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
		return
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", serveWS)
}

func main() {
	fmt.Println("Chat App v0.01")
	fmt.Print("Running server \nPress ^C To cancel \n")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
