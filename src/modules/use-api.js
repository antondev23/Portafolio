import { useCallback, useEffect, useState } from "react";

/* Una sola petición por endpoint: las pestañas y la barra lateral comparten resultado. */
const requests = new Map();
const results = new Map();

const request = (endpoint, type) => {
  if (!requests.has(endpoint)) {
    const promise = fetch(`${process.env.GATSBY_API_URL}${endpoint}`)
      .then((res) => (res.ok ? (type === "text" ? res.text() : res.json()) : Promise.reject(new Error(res.status))))
      .then((data) => {
        results.set(endpoint, data);
        return data;
      })
      .catch((error) => {
        requests.delete(endpoint);
        throw error;
      });
    requests.set(endpoint, promise);
  }
  return requests.get(endpoint);
};

export const useApi = (endpoint, type = "json") => {
  const [state, setState] = useState({ data: null, error: false });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (results.has(endpoint)) {
      setState({ data: results.get(endpoint), error: false });
      return undefined;
    }

    let alive = true;
    setState({ data: null, error: false });
    request(endpoint, type)
      .then((data) => alive && setState({ data, error: false }))
      .catch(() => alive && setState({ data: null, error: true }));

    return () => {
      alive = false;
    };
  }, [endpoint, type, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return { ...state, loading: state.data === null && !state.error, retry };
};
