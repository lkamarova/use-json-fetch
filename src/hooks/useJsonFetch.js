import { useEffect, useState } from "react";

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCanselled = false;
    const fetchData = () => {
      fetch(url, opts)
        .then((res) => res.json())
        .then(
          (res) => {
            if (!isCanselled) {
              setData(res);
              setLoading(true);
            }
          },

          (error) => {
            setError(error);
            console.log(error);
          }
        );
    };

    fetchData();

    return () => {
        isCanselled = true;
    }
    
  }, []);

  return [data, loading, error];
};
