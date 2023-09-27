import React from 'react';
import FetchQuote from './FetchQuote';
import useCounter from './useCounter';

function MultipleCustomHooks() {
  const { count, increment } = useCounter(1); // Inicializamos el contador en 1

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <button onClick={increment}>Incrementar Contador</button>
      <FetchQuote quote={count} />
    </div>
  );
}

export default MultipleCustomHooks;
