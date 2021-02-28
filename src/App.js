import { useEffect, useState } from "react";
import { chunk, fromPairs } from "lodash";
import "./App.css";
import { Globe } from "./Globe";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    window
      .fetch("./data/population909500.json")
      .then((res) => res.json())
      .then(([a, b, [year, d]]) => {
        setData(d);
      });
  }, []);

  const populationIndex = fromPairs(
    chunk(data, 3)
      .filter(([lat, lng, v]) => v > 0.05)
      .map(([lat, lng, v]) => [[lat, lng], v])
  );
  return (
    <div className="App">
      <Globe populationIndex={populationIndex} />
    </div>
  );
}

export default App;
