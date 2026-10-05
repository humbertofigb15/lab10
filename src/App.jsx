import { useState } from "react";
import { cifrar, descifrar } from "./Salt";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [textoCifrado, setTextoCifrado] = useState("");
  const [textoOriginal, setTextoOriginal] = useState("");

  const handleCifrar = () => {
    const resultado = cifrar(texto);
    setTextoCifrado(resultado);
  };

  const handleDescifrar = () => {
    const resultado = descifrar(textoCifrado);
    setTextoOriginal(resultado);
  };

  return (
    <div className="container">
      <h1>Lab 4 - Cipher and Decipher</h1>

      <label>Texto plano:</label>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un texto..."
      />

      <button onClick={handleCifrar}>
        Cifrar texto
      </button>

      <div className="resultado">
        <h3>Texto cifrado:</h3>
        <p>{textoCifrado}</p>
      </div>

      <button onClick={handleDescifrar}>
        Descifrar texto
      </button>

      <div className="resultado">
        <h3>Texto original:</h3>
        <p>{textoOriginal}</p>
      </div>
    </div>
  );
}

export default App;