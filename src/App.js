import "./App.css";
import { useState } from "react";
import { Navbar, Card, Button,Form } from "react-bootstrap";
function App() {
  const [count, setCount] = useState(0);
  const ans = [
    "The blue whale",
    "0",
    "The Umbrella Academy season 2",
    "Mango",
    "New York",
  ];
  const data = [
    {
      ques: "What's the biggest animal in the world? ",
      op1: "The blue whale",
      op2: "Elephant",
    },
    { ques: "How many bones does a shark have?", op1: "246", op2: "0" },
    {
      ques: "Which was the most streamed show on netflix in 2020?",
      op1: "The Umbrella Academy season 2",
      op2: "Lucifer",
    },
    {
      ques: "What fruit takes the scientific name Mangifera indica?",
      op1: "Mango",
      op2: "Orange",
    },
    {
      ques: "Which city had the first ever fashion week?",
      op1: "New York",
      op2: "Los Angeles",
    },
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
      <Navbar bg="dark">
        <Navbar.Brand>
          <h1>Welcome to the Quiz Page</h1>
        </Navbar.Brand>
      </Navbar>
      <Card bg="secondary">
        <Card.Body>
          {data.map((t, i) => (
            <div key={i}>
              <Card bg="success">
                <Card.Body>
                  <label>
                    <h3>{t.ques}</h3>{" "}
                  </label>
                  <br />
                  <select onChange={(e) => PointsCounter(e)}>
                    <option>Select</option>
                    <option>{t.op1}</option>
                    <option>{t.op2}</option>
                  </select>
                  <br />
                </Card.Body>
              </Card>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={(e) => {
              getmarks(e);
            }}
          >
            Submit
          </Button>{" "}
          <h5>{marks}</h5>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default App;
