
    // Personaje de TV
    let nombre = "Tanjiro";
    let anime = "Demon Slayer";
    let edad = 16;

    // Esto es un objeto declarado en javascript
    let personaje = {
        nombre: "Tanjiro",
        anime: "Demon Slayer",
        edad: 16,
    };

    console.log(personaje);
    // Forma de buscar algo en el objeto
    console.log(personaje.nombre);
    console.log(personaje.anime);
    console.log(personaje['anime']);

    personaje.edad = 15;

    let llave = 'edad';
    personaje[llave] = 13;

    delete personaje.anime;

    console.log(personaje);


    