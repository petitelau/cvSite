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
   
    allColors.forEach(c => containerEl.appendChild(c));

}