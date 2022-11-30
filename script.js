var salida = 1;
var controlador = 0;
let cantidad = prompt("Ingrese la cantidad de mangas que quiere registrar: ")
const mangas = new Array (cantidad);
do{
    let opcion = prompt("1 - Agregar manga \n2 - Buscar manga \n3 - Ver mangas \n4 - Salir")
    switch(opcion){
        case '1':
            if(controlador<cantidad){
                let nombre = prompt("Nombre de manga:")
                let genero = prompt("Genero de manga:")
                let precio = prompt("Precio de manga:")
                var posicion = controlador
                mangas[controlador] = new Manga(nombre, genero, precio, posicion)
                controlador++
            }
            if(controlador>=cantidad){
                prompt("Ya no hay más lugar para agregar mangas")
            }
            break;
        case '2':
                let nombreBuscar = prompt("Ingrese el nombre del manga que busca: ")
                var x = 0
                for(i = 0; i<cantidad; i++){
                    if(mangas[i]!=null){
                        if(nombreBuscar==mangas[i].nombre){
                            prompt("Nombre:" + mangas[i].nombre + "\nGenero: " + mangas[i].genero + "\nPrecio: " + mangas[i].precio);
                            x = 1
                            break;
                        }
                    }  
                }
                if(x==0){
                    prompt("Error: no se encontro ese nombre")
                }
                break;
        case '3':
            if(controlador!=0){
                for(var i = 0; i<=posicion; i++){
                    prompt("Nombre:" + mangas[i].nombre + "\nGenero: " + mangas[i].genero + "\nPrecio: " + mangas[i].precio);
                }
                break;
            }
            else{
                prompt("Error! no hay mangas cargados")
            }
            break;
        case '4':
            salida = 0
    }
}while(salida==1)

function Manga(nombre, genero, precio, id){
    this.nombre = nombre;
    this.genero = genero;
    this.precio = precio;
    this.id = id;
}
