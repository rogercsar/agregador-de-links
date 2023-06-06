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
    
    if (currentTheme === 'light') document.documentElement.classList.add('light')
    if (currentTheme === 'dark') document.documentElement.classList.remove('light')

    document.getElementById("btn1").setAttribute("href", localStorage.getItem('rogerlink:link1'))  
})


