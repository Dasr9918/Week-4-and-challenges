import React, { useState, useEffect } from 'react';

function FetchQuote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Definimos la URL de la API con un valor dinámico
    const apiUrl = `https://breakingbadapi.com/api/quotes/${quote}`;

    // Realizamos la solicitud fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, [quote]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>
          <p>{quote}</p>
        </blockquote>
      )}
    </div>
  );
}

export default FetchQuote;
