//---Para usar ES6 haciendo "default export" o exportación por defecto

const getAutor = () => {return "Miguel de Cervantes"}

export default getAutor

export const libro = "Don Quijote de la mancha" //Este no puede ser default, (sólo uno por módulo)