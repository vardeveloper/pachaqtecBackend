const bcrypt = require("bcryptjs");

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

/**
 * Comparte password with hash / Pasar contraseña sin encriptar y encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 */
const  compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };