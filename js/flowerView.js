export {FlowerView}

const FlowerView = (containerEl)=> {


   const info = [   {petalVisible: true, icon: "book-outline", msg: "Favorite reading: novels, fictional history"},
                    {petalVisible: true, icon: "megaphone-outline", msg: "Cheerleading Champion 2019" },
                    {petalVisible: true, icon: "color-palette-outline", msg:"Painting for fun and inspiration"},
                    {petalVisible: false, svg:false},
                    {petalVisible: false, svg:true},
                    {petalVisible: false, svg:false},
                    {petalVisible: true, icon: "globe-outline", msg:"Have worked on 4 different countries"},
                    {petalVisible: true, icon: "bicycle-outline", msg:"Biking and enjoy lanscape"},
                    {petalVisible: true, icon: "mic-outline", msg:"Fluent on Spanish,English,French and good german"}
                 ]

   let i = 0;
   while ( i < info.length ) {

    if (info[i].petalVisible == false) {
        const petal= document.createElement('DIV');
        petal.classList.add('petal'); 
        if (info[i].svg == true) {
            const svg= document.createElement('DIV');
            svg.classList.add('container-svg');
            svg.innerHTML = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="500" height="500" viewBox="0 0 025 025">
                <path id="circulito" fill="transparent"
                stroke=transparent 
                    d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" />
                <text width="100%" font-size="2px"  style="stroke: var(--color-dark);stroke-width: 0.05;">
                    <textPath xlink:href="#circulito" >
                        Get to know me, briefly in a nutshell
                    </textPath>
                </text>
            </svg>`;
            petal.appendChild(svg);
        }
        containerEl.appendChild(petal);
    }
    else {
        const petal= document.createElement('DIV');
        petal.classList.add('petal');
        const petalInside = document.createElement('DIV');
        petalInside.classList.add('petal-ins');
        const icon = document.createElement("ion-icon");
        icon.setAttribute("size", "large");
        icon.setAttribute("name", info[i].icon);
        const msg = document.createElement("P");
        msg.innerHTML=info[i].msg;
      
        petalInside.appendChild(icon);
        petalInside.appendChild(msg);
       
        petal.appendChild(petalInside);
        containerEl.appendChild(petal);
    }
    i++;
   }
}