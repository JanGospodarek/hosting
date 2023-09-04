import { useEffect, useState } from "react";

export const UseFetch = (props: {
  url: string;
  method: "GET" | "POST";
  json?: string;
}): { data: any; loading: boolean; error: boolean; fetcher: () => void } => {
  const { url, method, json } = props;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetcher = async () => {
    setLoading(true);
    try {
      const res = (await fetch(url, {
        method,
        body: json ? json : undefined,
      })) as Response;

      const data = await res.json();
      setLoading(false);

      console.log(data);

      setData(data);

      if (!res.ok) throw Error(`Błąd pobierania danych - kod: ${res.status}`);
      else setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  return { data, loading, error, fetcher };
};
