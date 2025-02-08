export function ProyectsArray(){

    const projectsArray = [
        {
            nombre: "Federacion de Ajedrez de Olavarría",
            descripcion: "Página web para la federación de ajedrez de Olavarría.",
            descripcionAvanzada:"Desarrollo y despliegue de la API de FAO para el backend utilizando Express. Tambien utilicé Multer y Cloudinary para guardar imágenes en al nube en formato webp, BlackBlaze para guardar los PGN de las partidas y Turso como base de datos. El frontend esta desarrollado con React JS utilizando el API context de React y React-Query para optimizar las llamadas a la base de datos guardando recursos en el cache.El frontend además utiliza la API pública de chess-api para la evaluación de las partidas. La web muestra la historia de la federacion, noticias, eventos, listado de jugadores con sus datos y torneos de la ciudad.",
            imagenPortada: "./Screenshot 2025-02-08 at 14-45-07 Federación de ajedrez Olavarría.png",
            link: 'https://federacionajedrezolavarria.onrender.com/',
            tecnologiasUsadas: ['react', 'javascript', 'bootstrap', 'node'],
            linkGithub: "https://github.com/juancruz12345/fao-frontend"
          },
          {
            nombre: "Truco Online",
            descripcion: "Juego de truco online para jugar contra una IA",
            descripcionAvanzada:"Juego de truco online para jugar contra una IA. Desarrollado con Javascript, React y React-bootstrap",
            imagenPortada: "./Screenshot 2025-02-08 at 14-25-08 Truco online.png",
            link: 'https://truco-online.vercel.app/',
            tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
            linkGithub: "https://github.com/juancruz12345/truco-online"
          },
        {
          nombre: "PaisajistApp",
          descripcion: "Página web de paisajismo enfocada en jardínes.",
          descripcionAvanzada:"Aplicacion web de paisajismo enfocada en jardines. La áplicacion permite cargar una imágen de fondo y ofrece un listado de plantas para agregar al lienzo. Las plantas también están clasificadas por su nivel de mantenimiento, riego, horas de sol necesarias y además permite redimesionar las imágenes. Esta desarrollada con React JS y React Bootstrap. Para la manipulación de imagenes utilicé la Fabric JS en conjunto con el API Canvas de Javascript.",
          imagenPortada: "./Screenshot 2024-10-23 at 18-51-22 PaisajistApp.png",
          link: 'https://paisajist-app.vercel.app/',
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/PaisajistApp"
        },
        {
          nombre: "Clothes",
          descripcion: "Template de e-commerce propio",
          descripcionAvanzada:"E-commerce con funcion de carrito desarrollado con React, bootstrap y javascript.",
          imagenPortada: "./Screenshot 2025-02-04 at 11-03-13 Clothes.png",
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/E-commerce"
        },
        
        {
          nombre: "Tv Online",
          descripcion: "Página web para ver tv online gratis",
          descripcionAvanzada:"Pagina web para ver algunos canales de televisión, mayormente de Argentina. La web esta desarrolalda con React JS y React Bootstrap, y utiliza los embeds de free-embes.com ",
          imagenPortada: "./Screenshot 2024-09-16 at 19-06-25 TV Online.png",
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/TV-Online"
        },
        {
          nombre: "Vivero online",
          descripcion: "E-commerce con autenticación de usuario y pasarela de pago integrada(Mercado Pago). Desarrolle y desplegue tanto el frontend como el backend",
          descripcionAvanzada:"E-commerce para un vivero online con autenticación de usuario, carrito y pasarela de pago integrada(Mercado Pago). Desarrolle el backend con Express y utilize la API de mercado pago para crear transacciones, ademas de su webhook para notificar el pago y la creacion de ordenes de compra. Utilice JWT para crear tokens de sesion de usuario y BCryot para encriptar las contraseñas en la base de datos. Como base de datos utilice Turso. El frontend esta desarrollado con React JS y React Bootstrap.",
          imagenPortada: "./Screenshot 2024-11-02 at 14-40-36 Vivero Online.png",
          tecnologiasUsadas: ['react', 'javascript', 'node', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/Vivero-La-Jardineta"
        },
        {
          nombre: "Drawing App",
          descripcion: "Web app para dibujar similar a paint",
          descripcionAvanzada:"Web app para dibujar similar a paint utilizando solo vanilla Javascript y su API Canvas JS. La aplicacion tiene la amyoria de herramientas principales para dibujar como asi tambien la posibilidad de subir una imagen o descargar el dibujo.",
          imagenPortada: "./drawingapp.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Drawing-App"
        },
        {
          nombre: "Chat online",
          descripcion: "Aplicación de chat online utilizando socket.io",
          descripcionAvanzada:"Aplicacion de chat online. El backend utiliza Express, Turso y Socket.io para el manejo de web sockets. Tanto el backend como el frontend estan desarrollados con vanilla JS.",
          imagenPortada: "./chat.png",
          tecnologiasUsadas: ['javascript', 'node', 'css'],
          linkGithub: "https://github.com/juancruz12345/Chat"
        },
        {
          nombre: "Tetris",
          descripcion: "Juego de tetris desarrollado con vanilla JS",
          descripcionAvanzada:"Juego de tetris desarrollado con vanilla JS utilizando el API Canvas. El juego guarda la puntuacion más alta y el nombre del jugador en el local storage.",
          imagenPortada: "./Screenshot 2024-11-02 at 14-13-49 Tetris.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Tetris-JS"
        },
        {
          nombre: "TODO-App",
          descripcion: "Aplicacion de lista de tareas",
          descripcionAvanzada:"Aplicación de lista de tareas desarrollada con React y Typescript.",
          imagenPortada: "./todo.png",
          tecnologiasUsadas: ['react', 'typescript', 'css'],
          linkGithub: "https://github.com/juancruz12345/TODO-app"
        }
      ];
    return {projectsArray}
}