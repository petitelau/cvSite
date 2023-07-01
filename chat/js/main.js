
import { setHtml } from "./init.js"
import { initSocket } from "./websocket.js"
import { fetchFn } from "./api.js";

window.wsId = -1;

const ChatView = (rootElement)  => {


    const {initBox,formEl, 
        backgroundContainer, 
        msg, chatbox, inputEL} = setHtml(rootElement);


    initSocket(msg, chatbox);

    initBox.onclick = () => {  
      if (backgroundContainer.classList.contains("bk-cont-visible")  ) {
         backgroundContainer.classList.remove("bk-cont-visible")
         formEl.classList.remove("outside-container-visible")

         Array.from(document.querySelectorAll("li")).forEach(el=> el.remove())
         inputEL.value ="";
         msg.innerText="ask me again"
         msg.style.display ="block"
         Array.from(document.querySelectorAll(".z-idx")).forEach(e=> e.style.opacity="1");

      } else {
        backgroundContainer.classList.add("bk-cont-visible");
        formEl.classList.add("outside-container-visible");
        Array.from(document.querySelectorAll(".z-idx")).forEach(e=> e.style.opacity="0");
        console.log("click");
      }
      formEl.style.opacity= "1";
    }

    const addItem = (text, imgIA)=>{
        const responseItem = document.createElement("LI")
       
        const responseItemTxt = document.createElement("SPAN")
        
        imgIA ? responseItem.appendChild(imgIA) : ""
         
        responseItem.appendChild(responseItemTxt);

        chatbox.appendChild(responseItem);
        Array.from(text).forEach( (l, idx) => {
           setTimeout(()=> responseItemTxt.textContent += l, 20*idx)
       })
    }

    const updateHtml = (data)=> {
        console.log(data)
        if (data.error) {
            return;
        }
        const imgIA=document.createElement("IMG");
        imgIA.setAttribute("src", "/chat/img/head.png");

        addItem(data.answer.answer, imgIA)
        msg.style.display ="none"
        chatbox.scrollTo(0, chatbox.scrollHeight)
    }

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = inputEL.value
        inputEL.value ="";
        addItem(question)
        console.log("event listener: " + wsId);
        fetchFn(wsId, question, (data) => updateHtml(data));
    });

}

ChatView(document.body)

