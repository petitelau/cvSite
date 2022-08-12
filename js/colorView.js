export {ColorView}

const ColorView = (containerEl, elements, subElements,colors)=> {

    const allColors = [];
    Array.from(elements).forEach(e=>console.log(e));

    const changeTheme = (c)=> {
        Array.from(elements).forEach(e=>
        e.style.backgroundImage= `url("../img/black-orchid.png"), 
        radial-gradient(var(--${c}-base),var(--${c}-base),var(--${c}-mittel),var(--${c}-dark))` );
      
        Array.from(subElements).forEach(e=> {
            e.style.backgroundColor= `var(--${c}-base)`;    
        })
    }

    colors.forEach(buttonColor => {
        const buttonEl = document.createElement('button');
        buttonEl.style.backgroundColor = `var(--${buttonColor}-base)`;
        buttonEl.classList.add('button-color');
        buttonEl.onclick = () => {
            changeTheme(buttonColor);
        }
        allColors.push(buttonEl)
    })
   
    const colorsContainer = document.createElement('DIV');
    colorsContainer.classList.add('colors-bar-container');
    colorsContainer.innerHTML= "&#10140;";
    colorsContainer.onclick = ()=> {

        allColors.forEach(el => 
           el.style.marginLeft = (el.style.marginLeft == 'unset') ? '-7rem' : 'unset'
           );
    }

    containerEl.appendChild(colorsContainer);
    allColors.forEach(c => containerEl.appendChild(c));


    //at the beginning
    changeTheme('blue');

}