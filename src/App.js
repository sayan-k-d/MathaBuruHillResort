import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Index from "./components/Index";

function App() {
  const [serverData, setServerData] = useState(null);
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
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Index serverData={serverData ? serverData : null} />
    </div>
  );
}

export default App;
