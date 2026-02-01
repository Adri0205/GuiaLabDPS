import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const validarNumeros = () => {
    if (numero1 === "" || numero2 === "") {
      setResultado("Por favor ingrese ambos números");
      return false;
    }
    return true;
  };

  const sumar = () => {
    if (!validarNumeros()) return;
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    if (!validarNumeros()) return;
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    if (!validarNumeros()) return;
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  };

  const dividir = () => {
    if (!validarNumeros()) return;
    if (parseFloat(numero2) === 0) {
      setResultado("Error: No se puede dividir entre cero");
      return;
    }
    const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la división: ${resultadoDivision.toFixed(2)}`);
  };

  const potenciar = () => {
    if (!validarNumeros()) return;
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
  };

  const raizCuadrada = () => {
    if (numero1 === "") {
      setResultado("Por favor ingrese el número");
      return;
    }
    const num = parseFloat(numero1);
    if (num < 0) {
      setResultado("Error: No se puede calcular la raíz cuadrada de un número negativo");
      return;
    }
    const resultadoRaiz = Math.sqrt(num);
    setResultado(`Raíz cuadrada de ${num}: ${resultadoRaiz.toFixed(2)}`);
  };

  return (
    <main>
      <div className="card">
        <div className="calculadora">
          <div className="numeros">
            <label className="text">Número 1:</label>
            <input
              className="inputNum"
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
          </div>
          <div className="numeros">
            <label className="text">Número 2:</label>
            <input
              className="inputNum"
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </div>
          <div className="botones">
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
            <button onClick={potenciar}>Potenciación</button>
            <button onClick={raizCuadrada}>Raíz Cuadrada</button>
          </div>
          {resultado && <div className="resultado">{resultado}</div>}
        </div>
      </div>
    </main>
  );
}

export default App;
