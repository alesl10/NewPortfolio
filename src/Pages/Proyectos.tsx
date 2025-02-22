import Proyecto from "../components/Proyecto"


const Proyectos = () => {

  return (
    <div>
      <h2 className=" text-2xl xl:text-4xl neon text-center">Mis Proyectos</h2>
      <Proyecto
        titulo="Tareas App"
        imagen="/tareas.jpg"
        descripcion="Esta aplicación de gestión de tareas, desarrollada con React y TypeScript, te permite crear, editar, eliminar y marcar tareas como completadas o pendientes, guardándolas en el LocalStorage para mantener la persistencia de datos, con la opción de conectarse a un API REST para almacenamiento en base de datos. Ofrece personalización de colores para adaptar la interfaz, junto con funciones de filtrado. Gracias a su arquitectura modular y moderna, es rápida, escalable y fácil de mantener, ideal para organizar tu día a día de manera eficiente."
        link="https://tareas-ts-alesl10s-projects.vercel.app/"
        repositorio="https://github.com/alesl10/Tareas-TS"
      />
      <Proyecto
        titulo="Mecanografia"
        imagen="/Mecanografia.webp"
        descripcion="Esta aplicación es un juego de mecanografía desarrollado con JavaScript, diseñado para mejorar tu velocidad al escribir. Te muestra un texto aleatorio que debes copiar lo más rápido posible, registrando el tiempo que tardas en completarlo. Al finalizar, te indica tu tiempo y te anima a intentarlo nuevamente para superar tu marca. Es una herramienta simple, interactiva y perfecta para practicar la precisión y rapidez al teclear. ⌨️"
        link="https://typing-game-pied-theta.vercel.app/"
        repositorio="https://github.com/alesl10/TypingGame"
      />
      <Proyecto
        titulo="Uber Clone"
        imagen="/uberClone.webp"
        descripcion="Esta página es un clon de la pantalla de inicio de Uber, creada con Astro y JavaScript, diseñada para mostrar mis habilidades como desarrollador front-end. La interfaz replica el diseño moderno y responsivo de la plataforma, con secciones bien estructuradas y optimización para distintos dispositivos. Es un proyecto perfecto para demostrar dominio de maquetación, estilos y componentes dinámicos. "
        link="https://clone-uber-page.vercel.app/"
        repositorio="https://github.com/alesl10/CloneUberPage"
      />
    </div>
  )
}

export default Proyectos