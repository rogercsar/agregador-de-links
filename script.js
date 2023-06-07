function toggleMode() {
    const html=document.documentElement
    // const theme = localStorage.getItem('rogerlink:theme')

    // localStorage.setItem('rogerlink:theme', 'light')

    const currentTheme = localStorage.getItem('rogerlink:theme')
   
    if (currentTheme === 'light') {
        localStorage.setItem('rogerlink:theme', 'dark')
        html.classList.remove('light')
        photo.src = localStorage.getItem('avatar')
    } else {
        localStorage.setItem('rogerlink:theme', 'light')
        html.classList.add('light')
        photo.src = localStorage.getItem('avatar')
    }
    
    //Pegar tag img
    let img = document.querySelector("#profile img")

    //Substituir Imagem
    if (html.classList.contains('light')) {
     //img.setAttribute('src', './assets/light-mode.png') 
    } else {
      //img.setAttribute('src', './assets/dark-mode.png') 
    }

    photo.src = localStorage.getItem('avatar')

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

    photo.src = localStorage.getItem('avatar')

})

function trocaImagem(input) {
  let photo = document.getElementById('avatar');
  let file = document.getElementById('upload');
  
  photo.addEventListener('click', () => {
    file.click();
  });

  file.addEventListener('change', () => {

    if(file.files.length<= 0){
        return;
    }

    let reader = new FileReader();

    reader.readAsDataURL(file.files[0]);
    
    reader.addEventListener('load', () => {
        const url = reader.result;
        photo.src = url;
        localStorage.setItem('avatar', url);
        
    });
   
  });
}
