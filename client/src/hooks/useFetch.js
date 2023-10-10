import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(url);

        console.log('Fetch success'); // Log success message
        console.log('Fetched data:', response.data.data); // Log fetched data

        setData(response.data.data);
        setLoading(false);
        console.log("after set data", data);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;