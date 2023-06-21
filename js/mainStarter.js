import { HeroView } from "./heroView2.js";
import { ColorView} from "./colorView.js";
import { FlowerView } from "./flowerView.js";
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
   
   
    ColorView(container,  ['blue', 'green', 'pink', 'red']);
}
  

const heroSection = ()=> {

    const heroContainer = document.querySelector('.hero-container'); 
    HeroView(heroContainer);
    
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

const setFlower = ()=> {
    
    const container = document.querySelector('.flower-container');

    FlowerView(container);
    const petals = document.querySelectorAll('.petal-ins');
    const bkgImg = ["texture","no-texture","texture"];

    const svg =document.querySelector('.container-svg');
    let i = 1;
    setInterval(()=>{
        if (i==3) i=1; 
        svg.classList.remove(`svg-rotate${i+1}`);
        svg.classList.add(`svg-rotate${i}`);
       
        console.log('start interval svg' + i);
        const img = i-1;
        const imgR = i;

        const petalsArr = Array.from(petals);
        const petalsArrCopy3 = petalsArr[3];
        const petalsArrCopy5 = petalsArr[5];
        
        petalsArr[3] =petalsArrCopy5;
        petalsArr[5] = petalsArrCopy3;

        Array.from(petalsArr).forEach((p,idx) => setTimeout(()=>{
            p.classList.remove(`${bkgImg[imgR]}`);
            p.classList.add(`${bkgImg[img]}`);
        },idx*1000));

        i++;
    },1000*45);

}



heroSection();
setText();
setTheme();
setJobEv();
setPortfolio();
setFlower();












