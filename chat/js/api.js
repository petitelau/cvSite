export {fetchFn}

const fetchFn = ( wsId, question, callback) => {
    console.log("from fetch:" + wsId);
    const index = "article-index"
    const namespace = "laura-namespace"
    const model = "text-embedding-ada-002"
    const val = {
        "question":question,
        "idx": index,
        "model": model,
        "namespace": namespace,
        "wsId": wsId,
        "range": "50"
    }
    //fetch('http://localhost:3500/chatBot',
    fetch('https://website-chat-app-3132c6ef0388.herokuapp.com/chatBot',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
               // "Origin" : "http://127.0.0.1:5500"
                "Origin":"https://cvsite-laura.web.app/"
            },
            body: JSON.stringify(val)
        }
    ).then(response => response.json().then(data => callback(data)));
}