import { HeroView } from "./heroView.js";
import { ColorView} from "./colorView.js";
import * as text from "./textos.js";


const setText =()=> {

    //hero
    document.querySelector('.my-name').innerHTML =  text.myName; 
    document.querySelector('.middle-msg').innerHTML = text.middleMsg;
    document.querySelector('.hero-msg').innerHTML =text.heroMsg;

    //education

    const edu =  document.querySelectorAll('.diploma-txt');
    edu[0].innerHTML = text.diploma1;
    edu[1].innerHTML = text.diploma2;
    edu[2].innerHTML = text.diploma3;


    // jobs
    const jobs = document.querySelectorAll('.job-desc');
    jobs[0].innerHTML = text.job1;
    jobs[1].innerHTML = text.job2;
    jobs[2].innerHTML = text.job3;

    // skills
    const skills = document.querySelectorAll('.skill-name');
    skills[0].innerHTML = text.skillsFE.join(' ');
    skills[1].innerHTML = text.skillsOther.join(' ');
    skills[2].innerHTML = text.skillsBE.join(' ');

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

const setPortfolio = ()=> {
    const htmlElements = ['<div class="title title-portfolio">Portfolio</div>'];
    const snapshots = [];
    
    snapshots.push('img/snapshots/blacklist.png');
    snapshots.push('img/snapshots/Colors.png');
    snapshots.push('img/snapshots/icosPlusGraphs.png');
    snapshots.push('img/snapshots/itSiteCheer.png');
    snapshots.push('img/snapshots/post-it.png');
    snapshots.push('img/snapshots/dashboard.png');
    snapshots.push('img/snapshots/dashboard2.png');
    snapshots.push('img/snapshots/souvenirDvd.png');
    snapshots.push('img/snapshots/souvenirHome.png');
    snapshots.push('img/snapshots/cosCards.png');
    snapshots.push('img/snapshots/souvenirCheer.png');
    snapshots.push('img/snapshots/itSiteDipl.png');
    snapshots.push('img/snapshots/months.png');
    snapshots.push('img/snapshots/playground.png');
    
    snapshots.forEach(s=>{
        let id = s.replace('img/snapshots/','');
        id = id.replace('.png', '');

        htmlElements.push(`<div id="${id}" class="snapshot-cont"><img class="snapshot" src="${s}" /></div>`);
    } );

    const p =document.querySelector('.portfolio-container');
  
    p.innerHTML = htmlElements.join(' ');
}


setText();
heroSection();
setTheme();
setJobEv();
setPortfolio();











