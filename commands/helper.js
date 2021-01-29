/**
 * 
 * @param {String} url
 * @returns {Boolean} True si es valida la url, false si no lo es 
 */
const isYtValidUrl = url => {
    let regex = "^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$";
    return url.match(regex);
}

module.exports = {
    isYtValidUrl: isYtValidUrl
}