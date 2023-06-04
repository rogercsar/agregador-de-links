function toggleMode() {
    const html=document.documentElement

    html.classList.toggle('light')

    //Pegar tag img
    const img = document.querySelector("#profile img")

    //Substituir Imagem
    if (html.classList.contains('light')) {
       img.setAttribute('src', './assets/light-mode.png') 
    } else {
        img.setAttribute('src', './assets/dark-mode.png') 
    }

    
}

