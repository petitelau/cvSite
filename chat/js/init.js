export {setHtml}

const setHtml = (rootElement)=> {
    const initBox= document.createElement("DIV");
    initBox.classList.add("initBox");
    const leftBox=document.createElement("DIV");
    leftBox.classList.add("initBox__box1");
    const rightBox = document.createElement("DIV");
    rightBox.classList.add("initBox__box2");

    initBox.appendChild(leftBox);
    initBox.appendChild(rightBox);
    rootElement.appendChild(initBox);

    const backgroundContainer = document.createElement("DIV");
    backgroundContainer.classList.add("bk-cont-hidden");

    rootElement.appendChild(backgroundContainer);

    const formEl = document.createElement("FORM");
    formEl.setAttribute('id','submit-question');
    formEl.classList.add("outside-container");

    const dbBox = document.createElement("DIV")
    dbBox.classList.add("db-box");

    const insideCont = document.createElement("DIV");
    insideCont.classList.add("inside-container")

    const chatbox = document.createElement("UL");
    chatbox.classList.add("chatbox");

    const msg = document.createElement("P");
    msg.classList.add("chatbox--loading-msg");

    msg.innerText ="Hello, what would you like to know ? ask me !";
    chatbox.appendChild(msg);
    insideCont.appendChild(chatbox);
    formEl.appendChild(dbBox);
    formEl.appendChild(insideCont);

    const questionBox=document.createElement("DIV")
    questionBox.classList.add('question-box')
    insideCont.appendChild(questionBox);

    const inputEL=document.createElement("INPUT")
    inputEL.classList.add('question-box__input')
    questionBox.appendChild(inputEL);

    const button = document.createElement("BUTTON");
    button.classList.add("question-box__btn");
    button.innerHTML = ">";

    questionBox.appendChild(button);
    rootElement.appendChild(formEl);

    return {initBox, formEl, 
            backgroundContainer, 
            msg, chatbox, inputEL}
}