function enterLogin() {
    const inputUser = document.getElementById('userLogin').value;
    const inputPass = document.getElementById('userPass').value;
    const btnGo = document.querySelector("#buttonLogin");

    if(inputUser && inputPass == "Admin"){
        localStorage.setItem("login", true);
        btnGo.setAttribute("href", "http://127.0.0.1:5500/index.html")
    } else {
        alert("Insira informações válidas")
        localStorage.setItem("login", false);
    }
}