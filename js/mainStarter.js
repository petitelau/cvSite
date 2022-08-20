import { HeroView } from "./heroView.js";
import { ColorView} from "./colorView.js";
import * as text from "./textos.js";


const setText =()=> {

    //hero
    document.querySelector('.my-name').innerHTML =  text.myName; 
    document.querySelector('.middle-msg').innerHTML = text.middleMsg;
    document.querySelector('.hero-msg').innerHTML =text.heroMsg;

    //education

    document.querySelectorAll('.diploma-txt')[0].innerHTML = text.diploma1;
    document.querySelectorAll('.diploma-txt')[1].innerHTML = text.diploma2;
    document.querySelectorAll('.diploma-txt')[2].innerHTML = text.diploma3;


    // jobs
    document.querySelectorAll('.job-desc')[0].innerHTML = text.job1;
    document.querySelectorAll('.job-desc')[1].innerHTML = text.job2;
    document.querySelectorAll('.job-desc')[2].innerHTML = text.job3;

    // skills
 
    document.querySelectorAll('.skill-name')[0].innerHTML = text.skillsFE.join(' ');
    document.querySelectorAll('.skill-name')[1].innerHTML = text.skillsOther.join(' ');
    document.querySelectorAll('.skill-name')[2].innerHTML = text.skillsBE.join(' ');


}

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

const setJobEv = ()=>{
    document.querySelector('.job-card-desc').onmouseleave = ()=> {
        document.querySelector('.job-card-desc').scrollTop = 0;
    }
    document.querySelector('.job-card-desc2').onmouseleave = ()=> {
        document.querySelector('.job-card-desc2').scrollTop = 0;
    }
}


setText();
heroSection();
setTheme();
setJobEv();











