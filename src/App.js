import { useEffect, useState } from "react";
import { chunk, fromPairs } from "lodash";
import "./App.css";
import { Globe } from "./Globe";

function App() {
  const [data, setData] = useState(null);
  const [displacement, setDisplacement] = useState(2.5);
  const [animate, setAnimate] = useState(true);

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

  if (!data) {
    return "Loading...";
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Globen</h1>
        </div>
      </header>
      <main className="relative h-full flex-1">
        <Globe
          animate={animate}
          setDisplacement={setDisplacement}
          displacement={displacement}
          populationIndex={populationIndex}
        />

        <div className="absolute top-4 left-4 shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <label className="block text-sm font-medium text-gray-700">
              Displacement
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="range"
                min="0"
                max="5"
                value={displacement}
                step="0.01"
                onChange={(ev) => setDisplacement(parseFloat(ev.target.value))}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="animate"
                  name="animate"
                  type="checkbox"
                  checked={animate}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={(ev) => {
                    console.log(ev.target.checked);
                    setAnimate(ev.target.checked);
                  }}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="animate" className="font-medium text-gray-700">
                  Animate
                </label>
                <p className="text-gray-500">Animate the displacement</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
