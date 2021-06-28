import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const ans = ["ASTON", "KTM", "Engineer"];
  const data = [
    { ques: "Choose a car: ", op1: "ASTON", op2: "Lambo" },
    { ques: "Best Bike: ", op1: "Bullet", op2: "KTM" },
  ];

  const [marks, setMarks] = useState(null);
  function PointsCounter(e) {
    {
      ans.map((item) => {
        console.log(e.target.value, item, count);
        if (e.target.value === item) return setCount(count + 1);
      });
    }
  }
  function getmarks(e) {
    setMarks("Your marks are: " + count);
    e.preventDefault();
  }
  console.log(data);
  return (
    <div className="App">
      <h1>Welcome to the Quiz</h1>
      {data.map((t) => (
        <div>
          <label>{t.ques}</label>
          <select onChange={(e) => PointsCounter(e)}>
            <option>Select</option>
            <option>{t.op1}</option>
            <option>{t.op2}</option>
          </select>
          <br />
          <br />
        </div>
      ))}
      <button
        onClick={(e) => {
          getmarks(e);
        }}
      >
        Submit
      </button>
      <h5>{marks}</h5>
    </div>
  );
}

export default App;
