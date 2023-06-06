function saveLinks(){
    const nome1 = document.getElementById("nameTask1").value 
    const link1 = document.getElementById("linkTask1").value

    const nome2 = document.getElementById("nameTask2").value 
    const link2 = document.getElementById("linkTask2").value

    const nome3 = document.getElementById("nameTask3").value 
    const link3 = document.getElementById("linkTask3").value

    const nome4 = document.getElementById("nameTask4").value 
    const link4 = document.getElementById("linkTask4").value


    if(link1 && nome1 == "" ){
        link1 = "https://google.com.br"
        nome1 = "Google"
        localStorage.setItem('link1', link1)
    } else {
        localStorage.setItem('link1', link1)
        localStorage.setItem('nome1', nome1)
    }

    if(link2 && nome2 == "" ){
        link2 = "https://google.com.br"
        nome2 = "Google"
        localStorage.setItem('link2', link2)
    } else {
        localStorage.setItem('link2', link2)
        localStorage.setItem('nome2', nome2)
    }

    if(link3 && nome3 == "" ){
        link3 = "https://google.com.br"
        nome3 = "Google"
        localStorage.setItem('link3', link3)
    } else {
        localStorage.setItem('link3', link3)
        localStorage.setItem('nome3', nome3)
    }

    if(link4 && nome4 == "" ){
        link4 = "https://google.com.br"
        nome4 = "Google"
        localStorage.setItem('link4', link4)
    } else {
        localStorage.setItem('link4', link4)
        localStorage.setItem('nome4', nome4)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("nameTask1").value = localStorage.getItem('nome1')
    document.getElementById("linkTask1").value = localStorage.getItem('link1')

    document.getElementById("nameTask2").value = localStorage.getItem('nome2')
    document.getElementById("linkTask2").value = localStorage.getItem('link2')

    document.getElementById("nameTask3").value = localStorage.getItem('nome3')
    document.getElementById("linkTask3").value = localStorage.getItem('nome3')

    document.getElementById("nameTask4").value = localStorage.getItem('nome4')  
    document.getElementById("linkTask4").value = localStorage.getItem('link4')

})