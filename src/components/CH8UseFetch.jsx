// useFetch.js

import { useState, useEffect } from 'react';

function useFetch(url) {
  // Inicializamos el estado con los valores iniciales
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    // Función asincrónica para realizar la solicitud fetch
    async function fetchData() {
      try {
        // Iniciamos la carga y restablecemos los errores
        setIsLoading(true);
        setHasError(null);

        // Realizamos la solicitud fetch
        const response = await fetch(url);

        // Comprobamos si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('La solicitud no se pudo completar.');
        }

        // Parseamos la respuesta como JSON
        const result = await response.json();

        // Actualizamos el estado con los datos recibidos
        setData(result);
      } catch (error) {
        // Capturamos cualquier error y lo establecemos en el estado
        setHasError(error);
      } finally {
        // Finalizamos la carga
        setIsLoading(false);
      }
    }

    // Llamamos a la función para realizar la solicitud cuando cambie la URL
    fetchData();
  }, [url]);

  // Devolvemos el objeto de estado
  return {
    data,
    isLoading,
    hasError,
  };
}

export default useFetch;
