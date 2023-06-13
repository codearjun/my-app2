import { useState } from "react";
import "./app.scss";
import BmiForm from "./components/BmiForm";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [heigth, setHeight] = useState("");
  const [weigth, setWeigth] = useState("");
  const [result, setResult] = useState("");

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
