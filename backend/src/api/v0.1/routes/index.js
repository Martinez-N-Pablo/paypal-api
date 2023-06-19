const { Router } = require('express');
const fs = require('fs');
const removeExtension = require('../scripts/removeExtension');

const router = Router();

//Obtenemos la ruta del directorio en la que se encuentra este archivo
const pathRouter = `${__dirname}`;

/**
 * Lee todos los archivos que se encuentran en este directorio
 */
fs.readdirSync(pathRouter).filter((file) => {
    //Eliminamos la extension del archivo
    const fileWithoutExt = removeExtension(file);
    //Si el archivo no esta en la lista de no incluidos y existe, le pasamos la ruta
    const skip = ['index'].includes(fileWithoutExt);
    if(!skip){
        router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`));
    }
})

//En caso de que no exista la ruta le devolvemos un error 404
router.get('*', (req, res) => {
    res.status(404).json({
        error: `Ruta no encontrada`
    });
})

module.exports = router;




