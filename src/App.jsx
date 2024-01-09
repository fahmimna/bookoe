import { useEffect, useState } from "react"
import React from "react";
import Home1Page from "pages/Home1";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const App = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ENDPOINT}`);
        const data = await response.json();
        setBooks(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, show an error message, etc.
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Home1Page />
    </>
  )
}

export default App;
