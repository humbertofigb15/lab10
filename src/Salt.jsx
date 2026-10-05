import CryptoJS from "crypto-js";

const llave = import.meta.env.VITE_APP_KEY;

const cifrar = (texto) => {
  const textoCifrado = CryptoJS.AES.encrypt(
    texto,
    llave
  ).toString();

  return textoCifrado;
};

const descifrar = (texto) => {
  const bytes = CryptoJS.AES.decrypt(
    texto,
    llave
  );

  const textoDescifrado = bytes.toString(
    CryptoJS.enc.Utf8
  );

  return textoDescifrado;
};

export { cifrar, descifrar };