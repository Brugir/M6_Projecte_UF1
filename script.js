window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos);

    // Crear handlers para los botones de control
    let botonOrdenarAZ = document.getElementById('ordenAZ');
    botonOrdenarAZ.addEventListener('click', ordenarNombreAZ)

    let botonOrdenarZA = document.getElementById('ordenZA');
    botonOrdenarZA.addEventListener('click', ordenarNombreZA)


    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);

    let botonGuardar = document.querySelector('.save-btn');
    botonGuardar.addEventListener('click', guardarTarjetas)

    
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);
        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo
        let infoPais = document.createElement('div');
        infoPais.classList.add('info-pais');
        
        let bandera = document.createElement('img');
        let pais = document.createElement('span');



        bandera.setAttribute('src', filosofo.pais.bandera);
        bandera.setAttribute('alt', "Bandera de " + filosofo.pais.nombre);

        pais.classList.add('pais');
        pais.innerHTML = filosofo.pais.nombre;


        infoPais.append(bandera, pais);

        filaInfo.append(infoPais);

        // Añadimos info de la corriente a filaInfo
        
        let infoCorriente = document.createElement('div');
        let corriente = document.createElement('span');

        infoCorriente.classList.add('info-corriente');
        corriente.classList.add('corriente');


        corriente.innerHTML = filosofo.corriente;

        infoCorriente.append("Corriente: ", corriente);

        filaInfo.append(infoCorriente);

        // Añadimos info del arma a filaInfo

        let infoArma = document.createElement('div');
        let arma = document.createElement('span');

        infoArma.classList.add('info-arma');
        arma.classList.add("arma");

        arma.innerHTML = filosofo.arma;

        infoArma.append("Arma: ", arma);

        filaInfo.append(infoArma);

        // Añadimos caja de habilidades

        // <div class="skills">
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);
        // Añadimos una a una las habilidades

        for (let infoHabilidad of filosofo.habilidades) {
            // Añadimos una caja de habilidad

             //     <div class="skill">
            let habilidad = document.createElement('div');
            habilidad.classList.add('skill');
    
            // Añadimos contenido caja de habilidad
            // 1.Icono de habilidad

            //         <img src="https://via.placeholder.com/16" alt="Icono de sabiduría">

            let iconoHabilidad = document.createElement('img');
            iconoHabilidad.setAttribute('src', "https://via.placeholder.com/16");
            iconoHabilidad.setAttribute('alt', "Icono de " + infoHabilidad.habilidad);

            habilidad.append(iconoHabilidad);
        
            // 2.Etiqueta de habilidad

            //         <span class="skill-name">Sabiduría</span>
            let etiquetaHabilidad = document.createElement('span');
            etiquetaHabilidad.classList.add('skill-name');

            etiquetaHabilidad.innerHTML = infoHabilidad.habilidad;

            habilidad.append(etiquetaHabilidad);

            // 2.Barra de habilidad

//         <div class="skill-bar">
//             <div class="level" style="width: 90%;"></div>
//         </div>

            let barra = document.createElement('div');
            barra.classList.add('skill-bar');

            let nivel = document.createElement('div');
            nivel.classList.add('level');

            nivel.setAttribute('style', `width: ${infoHabilidad.nivel / 4 * 100}%;`);

            barra.append(nivel);
            habilidad.append(barra);

            habilidades.append(habilidad);            
        }

        let botonEliminar = document.createElement('div');
        botonEliminar.innerHTML = "&#x2716";
        botonEliminar.classList.add('botonEliminar');
    
        botonEliminar.addEventListener('click', eliminarTarjeta);


        tarjeta.append(botonEliminar);


        
        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta(event) {
    event.target.parentElement.remove();
    
}

function ordenarNombreAZ() {
    
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });


    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');

    contenedor.innerHTML = '';
    for (let tarjetas of tarjetasOrdenadas){
        contenedor.append(tarjetas);
    }

    // Completar codi
}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });

    let contenedor = document.querySelector('.cards-container');

    contenedor.innerHTML = '';
    for (let tarjetas of tarjetasOrdenadas){
        contenedor.append(tarjetas);
    }

}

function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {
        nombre: document.getElementsByClassName('nombre')[0].value,
        imagen: document.getElementsByClassName('foto')[0].value,
        pais: {
            nombre: document.getElementsByClassName('pais')[0].value,
            bandera: document.getElementsByClassName('bandera')[0].value,
        },
        corriente: document.getElementsByClassName('corriente')[0].value,
        arma: document.getElementsByClassName('arma')[0].value,

        habilidades: [{
            habilidad: document.getElementsByClassName('skills')[0].value,
            nivel: document.getElementsByClassName('skills')[0].value
        },
        {
            habilidad: document.getElementsByClassName('skills')[0].value,
            nivel: document.getElementsByClassName('skills')[0].value
        },
        {
            habilidad: document.getElementsByClassName('skills')[0].value,
            nivel: document.getElementsByClassName('skills')[0].value
        },
        {
            habilidad: document.getElementsByClassName('skills')[0].value,
            nivel: document.getElementsByClassName('skills')[0].value
        }]
        
    };
    // nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    // nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    // nuevoFilosofo.pais = {};
    // nuevoFilosofo.pais.nombre = document.querySelector('.create-card-form .pais').value;
    // Completar la función

    let filosofos = [];
    filosofos.push(nuevoFilosofo);

    crearTarjetas(filosofos);
}

function parsearTarjetas(tarjetas){
    let filosofosParseados = [];
    for (let tarjeta of tarjetas){
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        // Completar funció
        
        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades){
            let habilidadParaGuardar = {};
            // Completar funció
        }
        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}

function guardarTarjetas(){
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));
    console.log('Tarjetas guardadas')
}


function cargarTarjetas() {
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]