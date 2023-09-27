// CounterComponent.js

import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  // Utilizamos el hook useCounter para obtener el estado y los métodos del contador
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default CounterComponent;

