
export {initSocket}


const initSocket = (msg, chatbox) => {
    const wsProgress = new WebSocket('ws://localhost:3501');
    //const wsProgress = new WebSocket(location.origin.replace(/^http/, 'ws'));
    console.log(wsProgress)
    wsProgress.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        console.log('WebSocket.onmessage : ' + JSON.stringify(data));
        if (data.type === 'id') {
            wsId = data.id;
            console.log("websocket: " +wsId);
        } else if (data.type === 'message') {
            msg.innerText = data.value;
            msg.style.display = "block";
            msg.style.opacity = "1";
            chatbox.scrollTo(0, chatbox.scrollHeight+ msg.style.height)
            console.log(msg.style.height)
        }
    });
}
