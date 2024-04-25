
    // Referencia al codigo binario
    // bit: 0 1
    // byte: se conforma por 8 bits osea 00000000
    // Decimal: 1,2,3,4,5,6,7,8,9
    // Binario: 0,1
    // pasa hacer los numeros son de la siguiente forma
    // byte: 00000000 -> 0
    // byte: 00000001 -> 1
    // byte: 00000010 -> 2
    // byte: 00000011 -> 3
    // byte: 00000100 -> 4
    // byte: 00000101 -> 5
    // byte: 00000111 -> 6

    console.log(1 | 3); // 00000011
    console.log(1 | 4); // 00000101
    console.log(3 | 5); // 00000111 