import { useState } from "react";
import "./App.scss";
import BmiForm from "./components/BmiForm";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [heigth, setHeight] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container">
      <Header />

      <BmiForm
        heigth={heigth}
        setHeight={setHeight}
        weigth={weigth}
        setWeigth={setWeigth}
        setResult={setResult}
      />

      <Result result={result} />
    </div>
  );
}

export default App;
