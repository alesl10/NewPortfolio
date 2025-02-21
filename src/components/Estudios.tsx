import Estudio from "./Estudio"

const Estudios = () => {
    return (
        <section  >
            <span className="text-2xl font-semibold neon">{`<Estudios />`}</span>
            <div className="gap-3 flex flex-col border-l-2 ">
                <Estudio
                    titulo="Desarrollador Tecnico Superior de Software - IFTS N° 16"
                    descripcion="La carrera de Técnico Superior en Desarrollo de Software forma profesionales capacitados para diseñar, desarrollar, implementar y mantener soluciones informáticas, dominando lenguajes de programación como  C# y JavaScript, además del manejo de bases de datos SQL y NoSQL. Los egresados adquieren habilidades en desarrollo web, móvil y de escritorio, aplicando metodologías ágiles y buenas prácticas de ingeniería de software. También se especializan en seguridad informática, integración de sistemas y uso de tecnologías emergentes, preparándose para trabajar en diversos sectores de la industria tecnológica o emprender sus propios proyectos."
                    certificado=""
                    link="https://www.coderhouse.com/ar/carreras/carrera-desarrollo-backend"
                    completo={false}
                />
                <Estudio
                    titulo="Back-End - CoderHouse"
                    descripcion="En este curso aprendí a trabajar con bases de datos NoSQL, dominando la gestión de datos de manera eficiente, ágil y escalable. Adquirí las habilidades necesarias para diseñar aplicaciones backend complejas, rápidas y robustas, dominando diversas técnicas de comunicación y manejo de grandes volúmenes de información. Implementé sistemas de autenticación y autorización para gestionar usuarios de forma segura, utilizando los métodos más utilizados en la industria e incorporando una arquitectura profesional. Aprendí sobre mocks y optimización con normalización, así como también exploré versionado, gestión de paquetes, logs, debugging y profiling para optimizar el rendimiento de las aplicaciones. Además, profundicé en la escalabilidad mediante el uso de clusters y Kubernetes, enfocándome en la configuración, seguridad y documentación de API REST. El curso incluyó un enfoque exhaustivo en testing, desde pruebas unitarias hasta evaluaciones avanzadas de funcionalidades, y abordó frameworks como NEST. Para finalizar, realicé prácticas integradoras que me permitieron desplegar aplicaciones en la nube de manera eficiente y productiva."
                    certificado=""
                    link="https://www.coderhouse.com/ar/carreras/carrera-desarrollo-backend"
                    completo={true}
                />
                <Estudio
                    titulo="React JS - CoderHouse"
                    descripcion="En este curso, que fue el tercer nivel de la carrera de programación, aprendí a programar por componentes mediante JavaScript, JS, ES6, y también conocí las ventajas de la utilización de los flujos de datos. Asimismo, apliqué el manejo de rutas utilizando Firebase y comprendí la utilización del virtual DOM mediante los desarrollos de React JS. Al finalizar, fui capaz de crear mis propias aplicaciones SPA y quedé en condiciones de hacer cualquier desarrollo con uno de los frameworks más populares y avanzados del momento."
                    certificado=""
                    link="https://www.coderhouse.com/ar/cursos/reactjs"
                    completo={true}
                />
                <Estudio
                    titulo="JavaScript - CoderHouse"
                    descripcion="En este curso aprendí los fundamentos del lenguaje de programación más usado en la actualidad, con el cual es posible crear aplicaciones de todo tipo. Exploré inicialmente herramientas propias del mismo, indagando casos prácticos de aplicación. Reconocí la utilidad de las librerías estudiando jQuery, así como apliqué técnicas de desarrollo para apps modernas con AJAX."
                    certificado=""
                    link="https://drive.google.com/file/d/1G_SRPkYExFpTkmOvbEwj985rIgQ62kx9/view"
                    completo={true}
                />
                <Estudio
                    titulo="Desarrollo Web - CoderHouse"
                    descripcion="En este curso aprendi a crear tu sitio web partiendo del prototipo en papel. me sumergí en las mejores prácticas del desarrollo web, trabajando con HTML y CSS. Conocí herramientas para optimizar al máximo un sitio web, implementando prácticas de versionado de código con GIT, y preprocesadores como SASS. Aprendí cómo aplicar Bootstrap a mis proyectos, y la importancia del SEO en mis desarrollos. Pude subir mi sitio a un servidor, y aprendí a interactuar con este servicio."
                    certificado=""
                    link="https://www.coderhouse.com/ar/cursos/desarrollo-web-online#sobreelcurso"
                    completo={true}
                />
            </div>

        </section>
    )
}

export default Estudios