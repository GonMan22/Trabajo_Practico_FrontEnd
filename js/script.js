const formulario_opinion = document.querySelector("#formulario_opinion") ;

const campo_nombre = document.querySelector("#nombre_input") ;

const campo_opinion = document.querySelector("#campo_opinion") ;

const formulario_email = document.querySelector("#formulario_email") ;

const campo_email = document.querySelector("#campo_email")

formulario_opinion.addEventListener("submit", (event) => {

    event.preventDefault() ;

    let texto_campo_nombre = campo_nombre.value.trim() ;
    let texto_campo_opinion = campo_opinion.value.trim() ;

    if (texto_campo_nombre.length < 1) {

        let error_nombre = document.querySelector(".error_nombre") ;
        error_nombre.textContent = "Debe ingresar un nombre" ;

        setTimeout(() => {
            error_nombre.textContent = "";
        }, 2000) ;

    }

    if (texto_campo_opinion.length < 1) {

        const error_opinion = document.querySelector(".error_opinion") ;
        error_opinion.textContent = "Debe ingresar una opinion" ;

        setTimeout(() => {
            error_opinion.textContent = "";
        }, 2000) ;

    }

})


formulario_email.addEventListener("submit", (event) => {

    event.preventDefault() ;

    let texto_campo_email = campo_nombre.value.trim() ;

    if (texto_campo_email.length < 1) {

        let error_email = document.querySelector(".error_email") ;
        error_email.textContent = "Debe ingresar un email" ;

        setTimeout(() => {
            error_email.textContent = "";
        }, 2000) ;

    }

})


let dato = 123 + "1";
console.log(dato, typeof dato)