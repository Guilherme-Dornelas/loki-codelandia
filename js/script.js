
const modal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = (modal.style.display === "none") ? "flex" : "none";
}


const close = () => {
    const iframe = document.getElementById("Video");
    const modal = document.getElementById("modal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
          // Pausa o vídeo
     iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

}


const btnTrailer = document.getElementById("btnTrailer");
btnTrailer.addEventListener("click", modal);


const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", close);

const estrelas = document.getElementsByClassName("estrela");
let i = 0;

while (i < estrelas.length) {
    estrelas[i].addEventListener("click", function() {
        if(this.getAttribute("src") === "img/star.png"){
            this.setAttribute("src", "img/star (1).png");
        } else {
            this.setAttribute("src", "img/star.png");
        }
    });
    i++;
}


const alteraTexto = () =>{

    const tamanhodaTela = window.innerWidth;

    if(tamanhodaTela < 380){
        document.getElementById("minu").textContent = "51"
    }else{
        document.getElementById("minu").textContent = "51 min"
    }
}

alteraTexto();

window.addEventListener("resize", alteraTexto);


