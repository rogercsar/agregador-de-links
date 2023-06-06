function toggleMode() {
    const html=document.documentElement
    // const theme = localStorage.getItem('rogerlink:theme')

    // localStorage.setItem('rogerlink:theme', 'light')

    const currentTheme = localStorage.getItem('rogerlink:theme')

    if (currentTheme === 'light') {
        localStorage.setItem('rogerlink:theme', 'dark')
        html.classList.remove('light')
    } else {
        localStorage.setItem('rogerlink:theme', 'light')
        html.classList.add('light')
    }
    
    //Pegar tag img
    const img = document.querySelector("#profile img")

    //Substituir Imagem
    if (html.classList.contains('light')) {
       img.setAttribute('src', './assets/light-mode.png') 
    } else {
        img.setAttribute('src', './assets/dark-mode.png') 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('rogerlink:theme')
    const gnome1 = localStorage.getItem('nome1')
    const glink1 = localStorage.getItem('link1')
    let btn1 = document.querySelector("#btn1")

    const gnome2 = localStorage.getItem('nome2')
    const glink2 = localStorage.getItem('link2')
    let btn2 = document.querySelector("#btn2")

    const gnome3 = localStorage.getItem('nome3')
    const glink3 = localStorage.getItem('link3')
    let btn3 = document.querySelector("#btn3")

    const gnome4 = localStorage.getItem('nome4')
    const glink4 = localStorage.getItem('link4')
    let btn4 = document.querySelector("#btn4")
    
    if (currentTheme === 'light') document.documentElement.classList.add('light')
    if (currentTheme === 'dark') document.documentElement.classList.remove('light')

    btn1.innerHTML = gnome1   
    btn1.setAttribute("href", glink1)

    btn2.innerHTML = gnome2
    btn2.setAttribute("href", glink2)

    btn3.innerHTML = gnome3
    btn3.setAttribute("href", glink3)

    btn4.innerHTML = gnome4
    btn4.setAttribute("href", glink4)
})

