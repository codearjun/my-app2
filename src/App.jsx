import { useState } from "react";
import "./App.scss";
import BmiForm from "./components/BmiForm";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="container">
      <Header />

      <BmiForm
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        setResult={setResult}
      />

      <Result result={result} />
    </div>
  );
}

export default App;
