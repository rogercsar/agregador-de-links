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
    let img = document.querySelector("#profile img")
    
    //Substituir Imagem
    if (html.classList.contains('light')) {
     //img.setAttribute('src', './assets/light-mode.png') 
    } else {
      //img.setAttribute('src', './assets/dark-mode.png') 
    }

    img.src = localStorage.getItem('avatar')

}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('linkLogin')
    const btnSair = document.createElement('button');
    btnSair.type = 'button';
    btnSair.innerHTML = 'Sair';
    btnSair.id = 'btnSair'
    btnSair.onclick = Logout();
    const btnLogin = document.querySelector("#btnLogin")
    const linkPerfil = document.querySelector("#linkPerfil")
    const user = localStorage.getItem('username')
    const arroba = document.getElementById("tagUser")
    let img = document.querySelector("#profile img")
    const currentTheme = localStorage.getItem('rogerlink:theme')
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')
    let link1 = JSON.parse(localStorage.getItem('link'))
    let link2 = JSON.parse(localStorage.getItem('link2'))
    let link3 = JSON.parse(localStorage.getItem('link3'))
    let link4 = JSON.parse(localStorage.getItem('link4'))

    
   
    if(link1 == ""){
        const link1 = {
            nome: "Adicionar link",
            link: "#"
          }
        localStorage.setItem("link", JSON.stringify(link1));
        btn1.textContent = link1.nome
        btn1.setAttribute("href", "#")
    } else {
        btn1.textContent = link1.nome;
        btn1.setAttribute("href", link1.link)
    }
  
    if(link2 == ""){
        const link2 = {
            nome: "Adicionar link",
            link: "#"
          }
        localStorage.setItem("link2", JSON.stringify(link2));
        btn2.textContent = link2.nome
        btn2.setAttribute("href", "#")
    } else {
        btn2.textContent = link2.nome;
        btn2.setAttribute("href", link2.link)
    }
  
    if(link3 == ""){
        const link3 = {
            nome: "Adicionar link",
            link: "#"
          }
        localStorage.setItem("link3", JSON.stringify(link3));
        btn3.textContent = link3.nome
        btn3.setAttribute("href", "#")
    } else {
        btn3.textContent = link3.nome;
        btn3.setAttribute("href", link3.link)
    }
   
    if(link4 == ""){
        const link4 = {
            nome: "Adicionar link",
            link: "#"
          }
        localStorage.setItem("link4", JSON.stringify(link4));
        btn4.textContent = link4.nome
        btn4.setAttribute("href", "#")
    } else {
        btn4.textContent = link4.nome;
        btn4.setAttribute("href", link4.link)
    }  
 

    if (localStorage.getItem('avatar') == ""){
        img.src = "https://cdn-icons-png.flaticon.com/512/5987/5987424.png";
    } 
    
    if (localStorage.getItem('login') == "true"){
        arroba.innerHTML = localStorage.getItem('username');    
        btnLogin.parentNode.remove();  
        container.appendChild(btnSair);  
        linkPerfil.setAttribute("href", "editprofile.html");
        if (localStorage.getItem('avatar') == ""){
            img.src = "https://cdn-icons-png.flaticon.com/512/5987/5987424.png";
        } else {
            img.src = localStorage.getItem('avatar');
        } 
    } else {
        arroba.innerHTML = "@username";
        container.appendChild(btnLogin);
        btnLogin.textContent = "Login";
        btnLogin.setAttribute("href", "login.html");
        linkPerfil.setAttribute("href", "index.html");
        img.src = "https://cdn-icons-png.flaticon.com/512/5987/5987424.png";        
    }

    if (currentTheme === 'light') document.documentElement.classList.add('light');
    if (currentTheme === 'dark') document.documentElement.classList.remove('light');

})

function Logout(){
      localStorage.clear();
}
