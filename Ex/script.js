const cria       = document.getElementById("mainImage");
const avatar     = document.getElementById("avatarImg");
const btn        = document.getElementById("btnComida");
const badge      = document.getElementById("statusBadge");
const barraFome  = document.getElementById("barraFome");
 

const estados = {
    normal:     "normal.png",
    puto:       "Raivaa.png",
    morto:      "mortoo.png",
    comendo:    "comendo.png",
    alimentado: "normal.png",
};
 
// ─── tela de fundo//
const fundoDia   = "dia.png";
const fundoNoite = "background_noite.jpg";
 

let contador     = 0;
const LIMITE_FOME  = 10;
const LIMITE_MORTE = 20;
 
let intervalo    = null;
let time_click   = null;
let time_out     = null;
let horaVirtual  = 0;
let modoManual   = false;
let morto        = false;
 

function controlador() {
    if (intervalo) clearInterval(intervalo);
 
    intervalo = setInterval(() => {
        if (morto) return;
 
        const src = cria.src;
        if (src.includes("comendo") || src.includes("normal")) return;
 
        contador++;
        console.log("Fome:", contador);
 
        const pct = Math.min((contador / LIMITE_MORTE) * 100, 100);
        barraFome.value = pct;
 
        if (contador >= LIMITE_FOME && contador < LIMITE_MORTE) {
            setCriatura(estados.puto);
            setStatus("😡 Com fome!", "badge-warning");
        }
 
        if (contador >= LIMITE_MORTE) {
            morrer();
        }
    }, 1000);
}
 
// ─── MOrreu//
function morrer() {
    morto = true;
    clearInterval(intervalo);
    setCriatura(estados.morto);
    setStatus("💀 Morreu...", "badge-error");
    barraFome.value = 100;
    console.log("Pet morreu.");
}
 
// ─── Alimentar //
function alimentar() {
 
    // ── Ressuscitar//
    if (morto) {
        morto = false;
        contador = 0;
        barraFome.value = 0;
 
        setCriatura(estados.alimentado);
        setStatus("🌟 Ressuscitou!", "badge-accent");
 
        controlador(); /
 
        time_out = setTimeout(() => {
            setCriatura(estados.normal);
            setStatus("😊 Normal", "badge-primary");
        }, 2000);
 
        return;
    }
 
    
    contador = 0;
    barraFome.value = 0;
    setCriatura(estados.comendo);
    setStatus("🍓 Comendo...", "badge-info");
    console.log("Comendo");
 
    if (time_click) clearTimeout(time_click);
 
    time_click = setTimeout(() => {
        setCriatura(estados.alimentado);
        setStatus("😄 Feliz!", "badge-success");
 
        time_out = setTimeout(() => {
            setCriatura(estados.normal);
            setStatus("😊 Normal", "badge-primary");
        }, 2000);
 
    }, 1200);
}
 
function setCriatura(src) {
    cria.style.opacity = "0";
    setTimeout(() => {
        cria.src = src;
        avatar.src = src;
        cria.style.opacity = "1";
    }, 150);
}
 
function setStatus(texto, classe) {
    badge.textContent = texto;
    badge.className   = `badge badge-lg font-semibold px-5 py-3 text-base shadow ${classe}`;
}
 
// ───  dia e noite automático //
function atualizarFundo() {
    setInterval(() => {
        if (modoManual) return;
 
        horaVirtual = (horaVirtual + 1) % 24;
 
        if (horaVirtual >= 12) {
            aplicarNoite();
        } else {
            aplicarDia();
        }
    }, 500);
}
 
// ─── LOgica que altera se é dia ou é noite ────────────
function alternarModoManual(isNoite) {
    modoManual = true;
    if (isNoite) {
        aplicarNoite();
    } else {
        aplicarDia();
        modoManual = false;
    }
}
 
function aplicarDia() {
    document.body.style.backgroundImage = `url('${fundoDia}')`;
    esconderEstrelas();
}
 
function aplicarNoite() {
    document.body.style.backgroundImage = `url('${fundoNoite}')`;
    mostrarEstrelas();
}
 
// ─── Animação das estrelas //
function criarEstrelas() {
    const container = document.getElementById("stars");
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const s = document.createElement("div");
        s.classList.add("star");
        const size = Math.random() * 4 + 2;
        s.style.width            = size + "px";
        s.style.height           = size + "px";
        s.style.top              = Math.random() * 55 + "%";
        s.style.left             = Math.random() * 100 + "%";
        s.style.animationDelay   = Math.random() * 4 + "s";
        s.style.animationDuration= Math.random() * 2 + 1.5 + "s";
        container.appendChild(s);
    }
}
 
function mostrarEstrelas() {
    document.querySelectorAll(".star").forEach(s => s.style.display = "block");
}
function esconderEstrelas() {
    document.querySelectorAll(".star").forEach(s => s.style.display = "none");
}
 
//-iniciar as funções//
criarEstrelas();
controlador();
atualizarFundo()
