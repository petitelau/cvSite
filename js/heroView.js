import { IMAGE_ME3 } from "../utils/constants.js";
import { imageLogo} from '../utils/constants.js';

export {HeroView} 

const HeroView = (canvas, container ) => {

    let IMAGE_LOGO;
    const ctx = canvas.getContext("2d");

    const drawMe = () => {
        container.style.backgroundImage = 'url(../img/skulls.png)';
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
            container.style.background= "#222";
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