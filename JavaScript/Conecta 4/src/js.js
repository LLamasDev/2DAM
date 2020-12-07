window.addEventListener('load', main);

function main() {
    jugador = "uno"; // Comienza el jugador 1
    finalizarJuego = false;
    color = "";
    anado = ""; // Esto seria la table que añadimos
    contador = 1; // Lo usamos para `pner los tr
    arrayOcupados = []; // Almacenamos todas las posibles zonas donde jugar
    jugadorUno = []; // Almacenamos donde ha jugado el jugador 1
    jugadorDos = []; // Almacenamos donde ha jugado el jugador 2
    tamanoDelArray = 6*7; // 6 en horizontal y 7 en vertical
    
    anado += "<table class='tablero'><tbody>";
    for (i = 0; i < tamanoDelArray; i++) { // arrayOcupados va del 0 al 41 y ocupados por nadie al principio
        arrayOcupados.push([i, "nadie"]);

        if (contador == 1){ // Si es uno añado tr
            anado += "<tr>";
        }

        anado += "<td><button type='button' class='blanco' id='" + i + "' onclick='pulsar(this.id)'></button></td>";

        if (contador == 7) { // Si el contador llega a 7 ponemos el fin del tr
            anado += "</tr>";
            contador = 0; // Inicializamos a 0 el contador para empezar de nuevo
        }

        contador++;
    }
    
    document.getElementById("tabla").innerHTML += anado; // Creamos la tabla
}

function pulsar(id) {
    idReturn = miroSiEstaOcupado(id); // Da el id para cambiar el color

    if (jugador == "uno") { // Si el jugador es el uno, su color es el rojo
        color = "red";
    } else if (jugador == "dos") { // Si el jugador es el dos, su color es el amarillo
        color = "yellow";
    }

    if (idReturn != "no" && finalizarJuego != true) { // Da no cuando ya se ha completado la columna, por lo tanto no se cambia de color
        document.getElementById(idReturn).style.backgroundColor = color; // Cambiamos el color de donde soltamos la ficha
    }

    quienHaGanado(); // Miro si ha ganado

    if (jugador == "uno") { // Si el jugador es el uno, cambiamos al jugador dos
        jugador = "dos";
    } else if (jugador == "dos") { // Si el jugador es el dos, cambiamos al jugador uno
        jugador = "uno";
    }
}

function miroSiEstaOcupado(id) {
    puedo = false;
    numero = parseInt(id); // Entra como string y lo pasamos a int para el for
    
    for (i = numero; i < arrayOcupados.length; i += 7) { // Muestra la columna desde que marcas hata abajo
        if (arrayOcupados[i][1] == "nadie") { // Miramos si le pertenece a un jugador, guardamos la posicion y cambio puedo a true
            posicionArray = i;
            puedo = true;
        }
    }

    if (puedo == true) { // Puedo es que hemos encontrado en la columna una posicion libre
        arrayOcupados[posicionArray][1] = jugador; // Cambio quien ha colocado ahi una ficha
        sePuedeCambiar = posicionArray;

        if (jugador == "uno") { // Almaceno en jugadorUno donde se ha jugado parar mirar luego si ha ganado
            jugadorUno.push(posicionArray);
        } else if (jugador == "dos") { // Almaceno en jugadorDos donde se ha jugado parar mirar luego si ha ganado
            jugadorDos.push(posicionArray);
        }
    } else { // Si ya la columna esta completa devolvemos no
        sePuedeCambiar = "no";
    }
    
    return sePuedeCambiar;
}

function quienHaGanado() {
    arrayHorizontal = [];
    arrayVertical = [];
    arrayDiagonal1 = [];
    arrayDiagonal2 = [];
    jugada = [];
    contadorArray = 0;
    contadorGanador = 0;
    horizontalPara = false;
    verticalPara = false;
    diagonal1Para = false;
    diagonal2Para = false;
    jugadorUno.sort(function(a, b){return a-b}); // Ordeno por lo cual no importa el modo inverso en el orden
    jugadorDos.sort(function(a, b){return a-b}); // Ordeno por lo cual no importa el modo inverso en el orden
    i = 0; // Numero que usamos para crear las combinaciones para ganar
    j = 0; // Numero que usamos para recorrer el array de jugadas del usaurio

    if (jugador == "uno") { // Si el jugador es el uno usamos su array donde esta almacenado que ha jugado
        jugadorJuega = jugadorUno;
    } else if (jugador == "dos") { // Usamos el array del dos
        jugadorJuega = jugadorDos;
    }

    while (true) { // Creo todas las posibles combinaciones para ganar
        if (i+3 == arrayOcupados.length) { // Paramos cuando llega al tamaño de arrayOcupados, el incremento es +1 y como se hace 3 veces es i+3
            horizontalPara = true;
        }

        if (i+21 == arrayOcupados.length) { // Paramos cuando llega al tamaño de arrayOcupados, el incremento es +7 y como se hace 3 veces es i+21
            verticalPara = true;
        }

        if (i+18 == arrayOcupados.length) { // Paramos cuando llega al tamaño de arrayOcupados, el incremento es +6 y como se hace 3 veces es i+18
            diagonal1Para = true;
        }

        if (i+24 == arrayOcupados.length) { // Paramos cuando llega al tamaño de arrayOcupados, el incremento es +8 y como se hace 3 veces es i+24
            diagonal2Para = true;
        }

        if (horizontalPara == false) { // Añadimos los 4 numeros de las posibles soluciones
            arrayHorizontal.push([i,i+1,i+2,i+3]);
        }

        if (verticalPara == false) { // Añadimos los 4 numeros de las posibles soluciones
            arrayVertical.push([i,i+7,i+14,i+21]);
        }

        if (diagonal1Para == false) { // Añadimos los 4 numeros de las posibles soluciones
            arrayDiagonal1.push([i,i+6,i+12,i+18]);
        }

        if (diagonal2Para == false) { // Añadimos los 4 numeros de las posibles soluciones
            arrayDiagonal2.push([i,i+8,i+16,i+24]);
        }

        if (horizontalPara == true && verticalPara == true && diagonal1Para == true && diagonal2Para == true) { // Cuando se han cumplido las 3 condiciones de llegar al 41 paramos
            break;
        }
        
        i++; // Incrementamos i para pasar a la siguiente posibilidad
    }

    if (jugadorJuega.length >= 4) { // Si la respuesta del jugador es mayor o igual a 4 empiezo a mirar
        for (k = 0; k < 4; k++) { // Se puede ganar de 3 formas: horizontal, vertical y diagonal sin importar el orden de empezar por izquierda o derecha o arriba o abajo
            if (contadorArray == 0) { // Opcion 1 es mirar por horizontal
                cualArray = arrayHorizontal;
            } else if (contadorArray == 1) { // Opcion 2 es mirar por vertical
                cualArray = arrayVertical;
            } else if (contadorArray == 2) { // Opcion 3 es mirar por diagonal1
                cualArray = arrayDiagonal1;
            } else if (contadorArray == 3) { // Opcion 3 es mirar por diagonal2
                cualArray = arrayDiagonal2;
            }
    
            for (n = 0; n < cualArray.length; n++) { // Recorro todas las posibles victorias
                if (contadorGanador == 4) { // Si ya el contador es 4 paramos para mostrar todas las posibles victorias
                    break;
                } else { // Pongo el contador a 0 ya que no ha surgido 4 coincidencias
                    contadorGanador = 0;
                }
    
                for (m = 0; m < jugadorJuega.length; m++) { // Recorro todas las respuesta del usuario
                    const buscar = cualArray[n].find(element => element == jugadorJuega[m]); // Buscamos en el array la opcion jugada del usuario
    
                    if (buscar != undefined){ // Si no es undefined significa que esta dentro de la posible respuesta ganadora y lo incrementamos
                        contadorGanador++;
                    }
                }
            }
    
            if (contadorGanador == 4) { // Muestro que ha ganado, para ganar se tiene que cumplir 4 veces
                document.getElementById("resultado").innerHTML = "¡Has ganado jugador numero " + jugador + "!";
                finalizarJuego = true; // No permitimos cambiar mas colores de las fichas, el juego ha terminado
            }
    
            contadorArray++;
        }
    }
}