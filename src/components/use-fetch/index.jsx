import { useEffect, useState } from "react";
import { CgTab } from "react-icons/cg";

export default function useFetch(url, option = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}.Some Error Occured`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
}
