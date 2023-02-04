// vincular botones del html al javaScript

const boton_zumo = document.getElementById("boton_zumo");
const boton_agua = document.getElementById("boton_agua");
const boton_vino = document.getElementById("boton_vino");
const boton_huir1 = document.getElementById("boton_huir1");
const boton_luchar1 = document.getElementById("boton_luchar1"); 
const boton_enfrentamiento1= document.getElementById("boton_enfrentamiento1");
const boton_alimentar = document.getElementById("alimentar");
const boton_pasar = document.getElementById("boton_pasar");
const boton_timbre = document.getElementById("timbre");
const boton_portal = document.getElementById("dormir");
const boton_muerte = document.getElementById("boton_muerte");

// crear objeto para los personajes

function personaje(fuerza,vida,suerte) {
    this.n_fuerza= fuerza;
    this.n_vida= vida;
    this.n_suerte= suerte;

    this.mostrarfuerza= function(){
        return(this.n_fuerza);
    } 
    this.mostrarvida= function(){
        return(this.n_vida);
    }
    this.mostrarsuerte= function(){
        return(this.n_suerte);
    }

    this.pocionfuerza= function(){
        this.n_fuerza +=5;
        return(this.n_fuerza);
    }
    this.pocionvida= function(){
        this.n_vida +=5;
        return(this.n_vida);
    }
    this.pocionsuerte= function (){
        this.n_suerte +=1;
        return(this.n_suerte);
    }

    this.recibirdaño= function (daño){
        this.n_vida -=daño;
        return(this.n_vida);
    }

}

// creación de personajes

let heroe = new personaje (10,10,0);
let borracho = new personaje (5,11,0);
let tumujer = new personaje (40,40,0);

// mostrar atributos del protagonista en pantalla

let indicadorfuerza= document.getElementById("cantidadfuerza");
indicadorfuerza.textContent= heroe.mostrarfuerza();
let indicadorvida= document.getElementById("cantidadvida");
indicadorvida.textContent= heroe.mostrarvida();
let indicadorsuerte= document.getElementById("cantidadsuerte");
indicadorsuerte.textContent= heroe.mostrarsuerte();

// mostrar atributos del enemigo "borracho"

let indicadorfuerza_borracho= document.getElementById("cantidadfuerza_borracho");
indicadorfuerza_borracho.textContent= borracho.mostrarfuerza();
let indicadorvida_borracho= document.getElementById("cantidadvida_borracho");
indicadorvida_borracho.textContent= borracho.mostrarvida();

// mostrar atributos del enemigo "tumujer"
let indicadorfuerza_tumujer= document.getElementById("cantidadfuerza_mujer");
indicadorfuerza_tumujer.textContent= tumujer.mostrarfuerza();
let indicadorvida_tumujer= document.getElementById("cantidadvida_mujer");
indicadorvida_tumujer.textContent= tumujer.mostrarvida();
// funciones de los botones

// Botones taberna
boton_zumo.addEventListener("click",function(){
    let taberna=document.getElementById("taberna");
    taberna.classList.add("invisible");
    let conflicto=document.getElementById("conflicto");
    conflicto.classList.remove("invisible");
    heroe.pocionfuerza();
    indicadorfuerza.textContent= heroe.mostrarfuerza();
})
boton_agua.addEventListener("click",function(){
    let taberna=document.getElementById("taberna");
    taberna.classList.add("invisible");
    let conflicto=document.getElementById("conflicto");
    conflicto.classList.remove("invisible");
    heroe.pocionvida();
    indicadorvida.textContent= heroe.mostrarvida();
})
boton_vino.addEventListener("click",function(){
    let taberna=document.getElementById("taberna");
    taberna.classList.add("invisible");
    let conflicto=document.getElementById("conflicto");
    conflicto.classList.remove("invisible");
    heroe.pocionsuerte();
    indicadorsuerte.textContent= heroe.mostrarsuerte();
})

// Botones conflicto
boton_luchar1.addEventListener("click",function(){
    let conflicto=document.getElementById("conflicto");
    let lucha=document.getElementById("pelea1");
    conflicto.classList.add("invisible");
    lucha.classList.remove("invisible");
})
boton_huir1.addEventListener("click",function(){
    let conflicto=document.getElementById("conflicto");
    let lucha=document.getElementById("pelea1");
    let gato=document.getElementById("gato");
    conflicto.classList.add("invisible");
    lucha.classList.remove("invisible");
    let tirada = (Math.floor((Math.random() * 6) + 1))+ heroe.mostrarsuerte();
    if (tirada >= 4){
        lucha.classList.add("invisible");
        gato.classList.remove("invisible");
        alert("el resultado de tu tirada es de " + tirada+ " HAS CONSEGUIDO HUIR!!");
    }else{
        alert("no has podido huir, el resultado de tu tirada es de " + tirada +" PREPARATE PARA LUCHAR!!!");

    }
})

// Botones de lucha
boton_enfrentamiento1.addEventListener("click",function(){
    let pelea1 = document.getElementById("pelea1");
    let gato=document.getElementById("gato");
    let derrota = document.getElementById("derrota");
    // primer enfrentamiento
    heroe.recibirdaño(borracho.n_fuerza);
    borracho.recibirdaño(heroe.n_fuerza);
    // es necesario otro enfrentamiento?
    if(borracho.mostrarvida()>0){
        heroe.recibirdaño(borracho.n_fuerza);
        borracho.recibirdaño(heroe.n_fuerza);
    }
    // el protagonista sigue vivo?
    if (heroe.mostrarvida() <=0){
        pelea1.classList.add("invisible");
        derrota.classList.remove("invisible");

    }else{
        pelea1.classList.add("invisible");
        gato.classList.remove("invisible");
        indicadorvida.textContent= heroe.mostrarvida();
    }
    //  Estos enfrentamientos hubieran sido más faciles usando 
    // la funcion while, pero, como no lo hemos visto en clase, he decidido hacerlo asi.
})
// botones escena del gato
boton_alimentar.addEventListener("click", function(){
    let gato = document.getElementById("gato");
    let portal = document.getElementById("portal");
    heroe.recibirdaño(1);
    heroe.pocionsuerte();
    indicadorsuerte.textContent= heroe.mostrarsuerte();
    indicadorvida.textContent= heroe.mostrarvida();
    gato.classList.add("invisible");
    portal.classList.remove("invisible");
    
})
boton_pasar.addEventListener("click",function(){
    let gato = document.getElementById("gato");
    let portal = document.getElementById("portal");
    gato.classList.add("invisible");
    portal.classList.remove("invisible");
})
boton_timbre.addEventListener("click",function(){
    let mujer = document.getElementById("mujer");
    let portal = document.getElementById("portal");
    alert(" Oyes los pasos firmes de tu mujer dirigiendose a la puerta...");
    portal.classList.add("invisible");
    mujer.classList.remove("invisible");
})
boton_portal.addEventListener("click",function(){
    let mujer = document.getElementById("mujer");
    let portal= document.getElementById("portal");
    let victoria = document.getElementById("victoria");
    let tirada = (Math.floor((Math.random() * 6) + 1))+ heroe.mostrarsuerte();
    if (tirada >= 4){
        portal.classList.add("invisible");
        victoria.classList.remove("invisible");
        alert("el resultado de tu tirada es de " + tirada+ " TU MUJER NO OYE TUS RONQUIDOS!!!!");
    }else{
        alert("el resultado de tu tirada es de " + tirada +" TU MUJER TE HA ESCUCHADO HACER RUIDO!!! PREPARATE PARA LUCHAR!!!");
        portal.classList.add("invisible");
        mujer.classList.remove("invisible");
    }
})
boton_muerte.addEventListener("click",function(){
    let mujer = document.getElementById("mujer");
    let derrota = document.getElementById("derrota2");
    heroe.recibirdaño(tumujer.n_fuerza);
    mujer.classList.add("invisible");
    derrota.classList.remove("invisible");
    indicadorvida.textContent= heroe.mostrarvida();

})