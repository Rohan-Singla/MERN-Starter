import  { useEffect, useState } from "react";
import api from "../utils/api"; // Adjust the path if necessary

const ApiTest = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/test"); 
        setResponse(res.data); 
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!response) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-red-500">Response from Backend</h1>
      <p>{response}</p> {/* Display plain text response */}
    </div>
  );
};

export default ApiTest;
