/**
 * Recibe un archivo con extension
 *      video.mp4
 *      foto.png
 *      indes.js
 * Y devuelve el nombre del fichero sin la extension
 * @param {*} file 
 * @returns String
 */
const removeExtension = file =>  file.split('.').shift()

module.exports = removeExtension