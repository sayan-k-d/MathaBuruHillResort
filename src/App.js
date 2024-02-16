import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Index from "./components/Index";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [serverData, setServerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mbher-api.onrender.com/api/website"
        );
        console.log("Response", response.data);
        setServerData(response.data);
      } catch (error) {
        console.log("Error Fetching Data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <PropagateLoader
            color={"#590000"}
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Index serverData={serverData ? serverData : null} />
      )}
    </div>
  );
}

export default App;
