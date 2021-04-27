let socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb =>{
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Success");
    };
    socket.onmessage = msg =>{
        console.log(msg)
        cb(msg);
    }
    socket.onclose = event => {
        console.log("Socket close:", event);
    };
    socket.onnerror = err =>{
        console.log("Socket err", err);
    };
};
let sendMsg = msg =>{
    console.log("sending msg", msg);
    socket.send(msg)
};

export {connect, sendMsg};

