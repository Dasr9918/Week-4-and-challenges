import React from 'react';
import useFetch from './CH8UseFetch';

function MyComponent() {
  const { data, isLoading, hasError } = useFetch('https://api.example.com/data');

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <div>
      <h1>Datos:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
