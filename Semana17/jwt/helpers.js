const bcrypt = require("bcryptjs");

/**
 * Encrypt textplain / Contraseña sin encriptar: hola.01
 * @param {*} textPlain 
 * @returns 
 */
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
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};


//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const jwt = require("jsonwebtoken");

const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
};

const decodeSign = (token) => {
  return jwt.decode(token, null);
};

module.exports = { encrypt, compare, tokenSign, decodeSign, verifyToken };