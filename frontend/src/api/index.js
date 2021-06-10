let socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb =>{
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Success");
    };
    socket.onmessage = msg =>{
        //console.log(msg.data)
        cb(msg.data);
    }
    socket.onclose = event => {
        console.log("Socket close:", event);
    };
    socket.onnerror = err =>{
        console.log("Socket err", err);
    };
};

let sendMsg = msg =>{
    let data = {
        msg: msg,
        uid: sessionStorage.getItem("uid")
    }
    //console.log("sending msg", msg);
    socket.send(JSON.stringify(data))
};

export {connect, sendMsg};

