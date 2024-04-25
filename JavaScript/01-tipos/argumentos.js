

    function sumar(a, b) {
        console.log(arguments);
        return a + b;
    }
    let result = sumar(5,6,1 ,2 ,3);
    console.log(result);
    console.log(typeof sumar);