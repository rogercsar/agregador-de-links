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
    
    localStorage.setItem('username', inputUser)
    localStorage.setItem('avatar', url); 
}

document.addEventListener('DOMContentLoaded', () => {
    const inputUser = document.getElementById("tagUser");
    const imagem = document.getElementById("avatar");
    
    document.getElementById("usuario").value = localStorage.getItem('username');
    inputUser.innerHTML = localStorage.getItem('username');
    imagem.src = localStorage.getItem('avatar');
     
})