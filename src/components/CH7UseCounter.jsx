import { useState } from 'react';

// Creamos el hook personalizado useCounter
function useCounter(initialValue = 0) {
  // Utilizamos useState para mantener el estado del contador
  const [count, setCount] = useState(initialValue);

  // Método para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Método para decrementar el contador
  const decrement = () => {
    setCount(count - 1);
  };

  // Método para restablecer el contador al valor inicial
  const reset = () => {
    setCount(initialValue);
  };

  // Devolvemos el estado actual del contador y los métodos para manipularlo
  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
