import { useEffect, useState } from "react";
import { chunk, fromPairs } from "lodash";
import "./App.css";
import { Globe } from "./Globe";

function App() {
  const [data, setData] = useState({});
  const [displacement, setDisplacement] = useState(0.5);

  useEffect(() => {
    window
      .fetch("./data/population909500.json")
      .then((res) => res.json())
      .then(([a, b, [year, d]]) => {
        setData(d);
      });
  }, []);

  const populationIndex = fromPairs(
    chunk(data, 3).map(([lat, lng, v]) => [[lat, lng], v])
  );

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Globen</h1>
        </div>
      </header>
      <main className="relative h-full flex-1">
        <Globe displacement={displacement} populationIndex={populationIndex} />
        <div className="absolute top-4 left-4 shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <label
              for="company_website"
              className="block text-sm font-medium text-gray-700"
            >
              Displacement
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="range"
                min="0.5"
                max="3"
                value={displacement}
                step="0.5"
                onChange={(ev) => setDisplacement(ev.target.value)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
