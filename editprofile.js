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

function saveProfile() {
    const inputUser = document.getElementById("usuario").value;   
    const btnSave = document.querySelector("#buttonSave") 
    localStorage.setItem('username', inputUser);
    
    saveLinks();
}

document.addEventListener('DOMContentLoaded', () => {
    const inputUser = document.getElementById("tagUser");
    const imagem = document.getElementById("avatar");
        
    document.getElementById("usuario").value = localStorage.getItem('username');
    inputUser.innerHTML = localStorage.getItem('username');
    imagem.src = localStorage.getItem('avatar');

    if(localStorage.getItem('avatar') == ""){
      img.src = "https://cdn-icons-png.flaticon.com/512/5987/5987424.png";
    }

 
    const input1 = document.getElementById('nameTask1')
    const input2 = document.getElementById('nameTask2')
    const input3 = document.getElementById('nameTask3')
    const input4 = document.getElementById('nameTask4')
    const linkTask1 = document.getElementById('linkTask1')
    const linkTask2 = document.getElementById('linkTask2')
    const linkTask3 = document.getElementById('linkTask3')
    const linkTask4 = document.getElementById('linkTask4')

    let link1 = JSON.parse(localStorage.getItem('link'))
    let link2 = JSON.parse(localStorage.getItem('link2'))
    let link3 = JSON.parse(localStorage.getItem('link3'))
    let link4 = JSON.parse(localStorage.getItem('link4'))

    input1.value = link1.nome;
    linkTask1.value = link1.link

    input2.value = link2.nome;
    linkTask2.value = link2.link

    input3.value = link3.nome;
    linkTask3.value = link3.link

    input4.value = link4.nome;
    linkTask4.value = link4.link    

})


function saveLinks(){
  const link1 = {
    nome: document.getElementById('nameTask1').value,
    link: document.getElementById('linkTask1').value
  }

  const link2 = {
    nome: document.getElementById('nameTask2').value,
    link: document.getElementById('linkTask2').value
  }

  const link3 = {
    nome: document.getElementById('nameTask3').value,
    link: document.getElementById('linkTask3').value
  }

  const link4 = {
    nome: document.getElementById('nameTask4').value,
    link: document.getElementById('linkTask4').value
  }

  localStorage.setItem("link", JSON.stringify(link1));
  localStorage.setItem("link2", JSON.stringify(link2));
  localStorage.setItem("link3", JSON.stringify(link3));
  localStorage.setItem("link4", JSON.stringify(link4));
}