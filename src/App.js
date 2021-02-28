import { useEffect } from "react";
import { chunk } from "lodash";
import "./App.css";
import { Globe } from "./Globe";

function App() {
  useEffect(() => {
    window
      .fetch("./data/population909500.json")
      .then((res) => res.json())
      .then(([a, b, [year, data]]) => console.log(chunk(data, 3)));
  }, []);

  return (
    <div className="App">
      <Globe />
    </div>
  );
}

export default App;
