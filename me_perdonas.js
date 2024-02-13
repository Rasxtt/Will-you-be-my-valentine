let nob = document.getElementById("No")

nob.addEventListener("mousemove", function() {
    let alto = random(1,10)
    let ancho = random(1,10)
    console.log(alto, ancho)
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;

    
    })
    
function random(min,max) {
    
    let numero = Math.floor(Math.random() * (max - min + 1) + min)
    return numero
}

let sib = document.getElementById("Si")

sib.addEventListener("click", function() {
    document.getElementById("gif2").removeAttribute("hidden")
    document.getElementById("gif1").style.display = "none";
    document.getElementById("Si").style.display = "none";
    document.getElementById("No").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("Si2").style.display = "none"
})



document.addEventListener("DOMContentLoaded", function() {
    let botones = document.getElementById("No")
    
    let botonesArray = []; // Array para almacenar los botones

    botones.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "BUTTON") {
            for (let i = 0; i < 2; i++) {
                
                let nuevoboton = document.createElement("button")
                nuevoboton.id = "Si2"
                nuevoboton.textContent = "Yes"

                

                let alto = random(1,10)
                let ancho = random(1,10)

                nuevoboton.style.gridRow = alto;
                nuevoboton.style.gridColumn = ancho

                document.getElementById("botones").appendChild(nuevoboton)
                
                botonesArray.push(nuevoboton);

                nuevoboton.addEventListener("click", function() {
                    document.getElementById("gif2").removeAttribute("hidden")
                    document.getElementById("gif1").style.display = "none";
                    document.getElementById("Si").style.display = "none";
                    document.getElementById("No").style.display = "none";
                    document.getElementById("h1").style.display = "none";
                    document.getElementById("Si2").style.display = "none";

                   
                    botonesArray.forEach(function(botn) {
                        botn.remove();
                    })

                    
                                        

})
                    let sib = document.getElementById("Si")

                    sib.addEventListener("click", function() {
                        document.getElementById("gif2").removeAttribute("hidden")
                        document.getElementById("gif1").style.display = "none";
                        document.getElementById("Si").style.display = "none";
                        document.getElementById("No").style.display = "none";
                        document.getElementById("h1").style.display = "none";
                        document.getElementById("Si2").style.display = "none"
                        botonesArray.forEach(function(botn) {
                            botn.remove();
                        })
                    })
            }
        }
    })
})

