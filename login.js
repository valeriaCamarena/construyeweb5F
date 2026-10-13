// funcion para cambiar  de formularios 
function cambiar (opcion){
    //buscar formularios por su id 
    const flogin = document.getElementById("form_login");
    const fregistro =document.getElementById("form_registro");
    // buscamos los botones por su id 
    const btnentrar = document.getElementById("iniciar ");
    const btnregistro = document.getElementById("registrar");
    // checamos boton presionado
    if(opcion=="login"){
        flogin.classList.remove("oculto");
        fregistro.classList.add("oculto");
        // cambiar color de botones
        btnregistro.classList.add("activo");
        btnregistro.classList.remove("activo")
    }
    else if (opcion === "registra"){
        fregistro.classList.remove("oculto");
        flogin.classList.add("oculto");
        btnregistro.classList.add("activo");
        btnentrar.classList.remove("activo");
     }
     
}