import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!response.ok) {
          setError("Failed to fetch the data");
          setLoading(false);
        }
        setData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(false);
          setError("Could not fetch the data.");
        }
      }
    };

    getData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
