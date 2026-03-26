// Remova o ".getAnimations"
const cria = document.getElementById("b"); 
const btn = document.getElementById("y");

const estados = {
    normal: "ab.png",
    puto: "Raivaa.png",
    comendo: "comendoa.png",
    morto: "mortoo.png",
}
    let contador = 0;
    let intervalo = null;
    let time_click = null;
    let time_out = null;

    function controlador (){ // Correto
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

    function alimentar (){
        cria.src = estados.comendo;
        contador =0;
        console.log("alimentando");

        if(time_click) clearInterval(time_click);

        time_click = setTimeout ( () => {
            cria.src = estados.comendo;
            time_out =setTimeout ( () => {
                cria.src = estados.normal;
            })
        },2000);
    }

    controlador();
   
