import { IMAGE_ME3 } from "../utils/constants.js";
import { imageLogo} from '../utils/constants.js';

export {HeroView} 

const HeroView = (heroContainer ) => {

    //row 1
    const heroRow1= document.createElement("DIV");
    heroRow1.classList.add('hero-row1');
    const cardContainer = document.createElement("DIV");
    cardContainer.classList.add("card-container");
    const myName =document.createElement("P");
    myName.classList.add("my-name");
    const middleName =document.createElement("P");
    middleName.classList.add("middle-msg");
    const heroMsg = document.createElement("P");
    heroMsg.classList.add("hero-msg");
    cardContainer.appendChild(myName);
    cardContainer.appendChild(middleName);
    cardContainer.appendChild(heroMsg);
    heroRow1.appendChild(cardContainer);
    
    //row2
    const heroRow2= document.createElement("DIV");
    heroRow2.classList.add('hero-row2');
    const heroButton1 = document.createElement("BUTTON");
    heroButton1.classList.add("hero-button1");
    const button1Inside =document.createElement("DIV");
    button1Inside.classList.add("hero-button-inside");
    const heroButton2 =document.createElement("BUTTON");
    heroButton2.classList.add("hero-button2");
    const button2Inside = document.createElement("DIV");
    button2Inside.classList.add("hero-button2-inside");
    heroButton1.appendChild(button1Inside);
    heroButton2.appendChild(button2Inside);
    heroRow2.appendChild(heroButton1);
    heroRow2.appendChild(heroButton2);


    // row3 rightContainer
    const rightContainer= document.createElement("DIV");
    rightContainer.classList.add('right-container');
    const barsContainer = document.createElement("DIV");
    barsContainer.classList.add("bars-container");
    const barLeft =document.createElement("DIV");
    barLeft.classList.add("bars");
    barLeft.setAttribute("id", "bar-left")
    const barRight =document.createElement("DIV");
    barRight.classList.add("bars");
    barRight.setAttribute("id", "bar-right");
    const canvasContainer = document.createElement("DIV");
    canvasContainer.classList.add("canvas-container");
    const canvas = document.createElement("CANVAS");
    canvas.setAttribute("id", "hero-canvas");
    canvas.setAttribute("width", "750");
    canvas.setAttribute("height", "750");

    canvasContainer.appendChild(canvas);
    barsContainer.appendChild(barLeft);
    barsContainer.appendChild(barRight);
    rightContainer.appendChild(barsContainer);
    rightContainer.appendChild(canvasContainer);

   
    heroRow1.appendChild(heroRow2);
    heroRow1.appendChild(rightContainer);

    heroContainer.appendChild(heroRow1);


    heroButton1.onclick = ()=> {
        window.open('img/cv2022_5.pdf');
    }

    heroButton2.onclick = ()=> {
        window.open('mailto:laura.gomez.2008@gmail.com');
    }

 


    let IMAGE_LOGO;
    const ctx = canvas.getContext("2d");

    const drawMe = () => {
        canvasContainer.style.backgroundImage = 'url(../img/skulls.png)';
        let x, y;
        x=200; y=10;
        createImage(IMAGE_ME3,x,y, 490,650);
    };

    const drawFixLogo = () =>{
        let idx= 0;
        const xPos =[100,550,250,350,450,550,640];
        const yPos =[2,340,180,25,220,120,240];
        imageLogo.forEach( img=> {
            IMAGE_LOGO = img;
            createImage(IMAGE_LOGO, xPos[idx], yPos[idx], 80,80);
            idx += 1;
        })
    }
    
    const drawLogo = () => {
        return new Promise((res, rej) =>{
        canvasContainer.style.background= "#222";
        //container.style.backgroundImage = 'url("../img/light-wool.png")'
        let idx= 0;
        let y = -1;
        let direction =1;
        const xPos =[50,150,250,350,450,550,640];
       
        let once =1;
        let timer;
        const twiceTimer = setInterval (()=> { 
         
                 timer= setInterval(()=>{
                    imageLogo.forEach( img=> {
                        IMAGE_LOGO = img;
                        createImage(IMAGE_LOGO, xPos[idx], y*(idx+1)*2, 80,80);
                        idx += 1;
                        y+=direction;
                    })
                    idx=0;
                    if (y > 47) direction*=-1; 
                    if (y <5 && direction == -1)  clearInterval(timer);
                },50);
                direction=1;
                y=-1;
                once++;
                if (once>3) {
                    clearInterval(twiceTimer);
                    clearInterval(timer)
                    res(true);
                }
        },1000);

      });
    }
       
    const createImage = (image, x, y, x1, y1) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, x, y, x1, y1);
        };
        img.src = image;
    };

    const drawLogoAnim =() =>{
        drawFixLogo();
        drawLogo().then( r => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFixLogo();
        })
    }
    
    let i=0;
    let animTimer = setInterval(() => {
        (i%2)==0 ? drawLogoAnim():drawMe();
       i++;
    }, 8500);
    
    drawMe();

    setTimeout(()=>{
        clearInterval(animTimer);
        console.log('clear all intervals');
    }, 1000*60)
    setTimeout(()=>{
        console.log('draw');
        drawMe();
    }, 1000*60*1.2)

}