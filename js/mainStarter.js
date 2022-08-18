import { HeroView } from "./heroView.js";
import { ColorView} from "./colorView.js";


const setTheme= () => {
    const container = document.querySelector('.color-themes');
    const element = document.querySelectorAll('.main-color');
   
    ColorView(container, element,  ['blue', 'green', 'pink', 'red']);
}
  

const heroSection = ()=> {
    const container = document.querySelector('.canvas-container');
    const canvas = document.getElementById('hero-canvas');
    
    HeroView(canvas, container);
    
}


heroSection();
setTheme();


document.querySelector('.job-card-desc').onmouseleave = ()=> {
    document.querySelector('.job-card-desc').scrollTop = 0;
}
document.querySelector('.job-card-desc2').onmouseleave = ()=> {
    document.querySelector('.job-card-desc2').scrollTop = 0;
}








