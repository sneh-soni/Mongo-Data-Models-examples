import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>hello</h1>
      <h2>JOKES: {jokes.length}</h2>
      {jokes.map((joke) => {
        return <div key={joke.id}>{joke.content}</div>;
      })}
    </>
  );
}

export default App;
