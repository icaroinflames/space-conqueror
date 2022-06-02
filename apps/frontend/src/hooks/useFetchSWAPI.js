import { useState, useEffect } from "react";
const BASE_URL = "https://swapi.dev/api/";


const useFetchSWAPI = (endpoint, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpointUrl = BASE_URL + endpoint;

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(endpointUrl, options);
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [endpointUrl]);

return { response, error, loading };
};

export default useFetchSWAPI;