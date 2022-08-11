import { HeroView } from "./heroView.js";
import { ColorView} from "./colorView.js";


const setTheme= () => {
    const container = document.querySelector('.color-themes');
    const element = document.querySelectorAll('.main-color');
    const subElement = document.querySelectorAll('.main-color-mitte');
    ColorView(container, element, subElement, ['blue', 'green', 'pink', 'red', 'violet']);
}
  

const heroSection = ()=> {
    const container = document.querySelector('.canvas-container');
    const canvas = document.getElementById('hero-canvas');
    
    HeroView(canvas, container);
    
}


heroSection();
setTheme();











