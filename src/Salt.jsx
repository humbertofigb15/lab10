import CryptoJS from "crypto-js";

const cifrar = (texto) => {
  const textoCifrado = CryptoJS.AES.encrypt(
    texto,
    "12345678"
  ).toString();

  return textoCifrado;
};

const descifrar = (texto) => {
  const bytes = CryptoJS.AES.decrypt(
    texto,
    "12345678"
  );

  const textoDescifrado = bytes.toString(
    CryptoJS.enc.Utf8
  );

  return textoDescifrado;
};

export { cifrar, descifrar };