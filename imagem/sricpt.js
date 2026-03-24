const cria = document.getAnimations.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal: "normal.png",
    puto: "aa.png",
    comendo: "a.png",
    morto: "aaaa.png",
}
    let contador = 0;
    let intervalo = null;
    let time_click = null;
    let time_out = null;

    function cotrolador (){
        if(intervalo) clearInterval(intervalo)

            intervalo = setInterval(() => {
                 contador++;

               console.log("tempo:",contador);
               
               if(contador == 30){
                cria.src = estados.puto
               }
               if(contador == 60){
                cria.src = estados.morto;
               }

            }, 1000);
            
    }

    controlador();
   
