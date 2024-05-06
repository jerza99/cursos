
    /*
     Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "".
     - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
     - EXTRA: ¿Eres capaz de dibujar más figuras?
    */

    // Primer paso dibujar un piramide 
    // Como tiene que quedar la piramide
    //     +
    //    +++
    //   +++++
    //  +++++++
    // +++++++++ 
    //Variables
    
    let pisos = 3;
    let elemento = document.getElementById('piramide');
    for (let i = 0; i <= pisos; i++) {
        let line = '';
        for (let j = 0; j <= pisos - i; j++) {
            line += ' ';
        }
        for (let k = 0; k <= 2 * i - 1; k++) {
            line += '*';
        }
        elemento.innerHTML += line + '<br>';
    }

