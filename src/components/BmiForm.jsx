import calculateBmi from "../common/calculateBmi";

const BmiForm = (props) => {
  const { height, weight, setHeight, setWeigth, SetResult } = props;

  return (
    <form>
      <div>
        <label htmlfor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlfor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            setWeigth(event.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-success w-100"
        onClick={() => {
          const result = calculateBmi(height, weight);
          SetResult(result);
        }}
        type="button"
      >
        Calculate
      </button>
    </form>
  );
};

export default BmiForm;
