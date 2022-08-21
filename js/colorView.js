export {ColorView}

const ColorView = (containerEl,colors)=> {

    const allColors = [];

    const changeTheme = (c)=> {
        
        document.body.style.setProperty('--color-base',`var(--${c}-base)`);
        document.body.style.setProperty('--color-mittel',`var(--${c}-mittel)`);
        document.body.style.setProperty('--color-dark',`var(--${c}-dark)`);
       
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