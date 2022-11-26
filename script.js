let menuVisible = false;
//Função que oculta ou mostra o menu
const mostrarOcultarMenu = () => {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

const selecionar = () =>{
    //Para ocultar o menu quando eu selecionar uma opção
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Função que aplica as animações das habilidades
function habilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("comunicacao");
        habilidades[3].classList.add("trabalho");
        habilidades[4].classList.add("criatividade");
        habilidades[5].classList.add("dedicacao");
        habilidades[6].classList.add("projeto");
    }
}
//Para detectar a rolagem e aplicar a animação da barra de habilidades
window.onscroll = function(){
    habilidades();
} 