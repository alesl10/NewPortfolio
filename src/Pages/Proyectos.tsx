import Proyecto from "../components/Proyecto"


const Proyectos = () => {

  return (
    <div>
      <h2 className=" text-2xl xl:text-4xl neon text-center">Mis Proyectos</h2>
      <Proyecto
        titulo="Tareas App"
        imagen="/tareas.jpg"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti hic quasi quaerat doloremque eligendi dolorem quibusdam cupiditate eius, impedit modi earum dicta! Dolor quos, vitae magni voluptate quod quia.
                    Saepe, fugiat. Consequatur qui"
        link="asdasd"
      />
      <Proyecto
        titulo="Mecanografia"
        imagen="/Mecanografia.webp"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti hic quasi quaerat doloremque eligendi dolorem quibusdam cupiditate eius, impedit modi earum dicta! Dolor quos, vitae magni voluptate quod quia.
                    Saepe, fugiat. Consequatur qui"
        link="asdasd"
      />
      <Proyecto
        titulo="Uber Clone"
        imagen="/uberClone.webp"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti hic quasi quaerat doloremque eligendi dolorem quibusdam cupiditate eius, impedit modi earum dicta! Dolor quos, vitae magni voluptate quod quia.
                    Saepe, fugiat. Consequatur qui"
        link="asdasd"
      />
    </div>
  )
}

export default Proyectos