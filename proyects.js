export function ProyectsArray(){

    const projectsArray = [
        {
            nombre: "Federacion de Ajedrez de Olavarría",
            descripcion: "Página web para la federacion de ajedrez de Olavarría.",
            descripcionAvanzada:"Desarrollo y despliegue de la API de FAO para el backend utilizando Express. Tambien utilicé Multer y Cloudinary para guardar imagenes y Turso como base de datos. El frontend esta desarrollado con React JS utilizando el API context de React y React-Query para optimizar las llamadas a la base de datos guardando recursos en el cache. La web muestra noticias, eventos, listado de jugadores y torneos de la ciudad.",
            imagenPortada: "./Screenshot 2025-01-11 at 13-11-24 FAO.png",
            link: 'https://federacionajedrezolavarria.onrender.com/',
            tecnologiasUsadas: ['react', 'javascript', 'bootstrap', 'node'],
            linkGithub: "https://github.com/juancruz12345/fao-frontend"
          },
        {
          nombre: "PaisajistApp",
          descripcion: "Página web de paisajismo enfocada en jardínes.",
          imagenPortada: "./Screenshot 2024-10-23 at 18-51-22 PaisajistApp.png",
          link: 'https://paisajist-app.vercel.app/',
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/PaisajistApp"
        },
        {
          nombre: "Tv Online",
          descripcion: "Página web para ver tv online gratis",
          imagenPortada: "./Screenshot 2024-09-16 at 19-06-25 TV Online.png",
          tecnologiasUsadas: ['react', 'javascript', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/TV-Online"
        },
        {
          nombre: "Vivero online",
          descripcion: "E-commerce con autenticación de usuario y pasarela de pago integrada(Mercado Pago). Desarrolle y desplegue tanto el frontend como el backend",
          imagenPortada: "./Screenshot 2024-11-02 at 14-40-36 Vivero Online.png",
          tecnologiasUsadas: ['react', 'javascript', 'node', 'bootstrap'],
          linkGithub: "https://github.com/juancruz12345/Vivero-La-Jardineta"
        },
        {
          nombre: "Drawing App",
          descripcion: "Web app para dibujar similar a paint",
          imagenPortada: "./drawingapp.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Drawing-App"
        },
        {
          nombre: "Chat online",
          descripcion: "Aplicación de chat online utilizando socket.io",
          imagenPortada: "./chat.png",
          tecnologiasUsadas: ['react', 'node', 'javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Chat"
        },
        {
          nombre: "Tetris",
          descripcion: "Juego de tetris desarrollado con vanilla JS",
          imagenPortada: "./Screenshot 2024-11-02 at 14-13-49 Tetris.png",
          tecnologiasUsadas: ['javascript', 'css'],
          linkGithub: "https://github.com/juancruz12345/Tetris-JS"
        },
        {
          nombre: "TODO-App",
          descripcion: "Aplicacion de lista de tareas",
          imagenPortada: "./todo.png",
          tecnologiasUsadas: ['react', 'typescript', 'css'],
          linkGithub: "https://github.com/juancruz12345/TODO-app"
        }
      ];
    return {projectsArray}
}