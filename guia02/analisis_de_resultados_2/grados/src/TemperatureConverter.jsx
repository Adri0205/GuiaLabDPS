import { useState } from 'react'
import './App.css'

export default function TemperatureConverter() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState('CtoF')
  const [result, setResult] = useState(null)

  function convert() {
    const value = parseFloat(input)
    if (Number.isNaN(value)) {
      setResult('Ingrese un número válido')
      return
    }

    if (mode === 'CtoF') {
      const f = (value * 9) / 5 + 32
      setResult(`${f.toFixed(2)} °F`)
    } else {
      const c = ((value - 32) * 5) / 9
      setResult(`${c.toFixed(2)} °C`)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    convert()
  }

  return (
    <section className="converter">
      <h2>Conversor de Temperatura</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        <div className="field">
          <label>Temperatura</label>
          <input
            type="number"
            step="any"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ej. 36.6"
          />
        </div>

        <div className="field">
          <label>Conversión</label>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="CtoF">Celsius → Fahrenheit</option>
            <option value="FtoC">Fahrenheit → Celsius</option>
          </select>
        </div>

        <div className="actions">
          <button type="submit">Convertir</button>
          <button
            type="button"
            onClick={() => {
              setInput('')
              setResult(null)
            }}
          >
            Limpiar
          </button>
        </div>
      </form>

      {result !== null && (
        <div className="result">
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </section>
  )
}
