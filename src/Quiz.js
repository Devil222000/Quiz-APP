
import React from "react";
import { useState } from "react";
function Quiz() {
  const [count, setCount] = useState(0);
  const ans = ["ASTON", "KTM","Engineer"];
  function PointsCounter(e) {
    {
      ans.map((item) => {
        console.log(e.target.value,item,count);
         if(e.target.value===item)
         return setCount(count+1);

      });
    }
  }
 
  return (
    <div>
      <h1>Welcome to the Quiz Page</h1>
      <label>Choose a car:</label>
      <select onChange={(e) => PointsCounter(e)}>
        <option>Select</option>
        <option>Ferrari</option>
        <option>ASTON</option>
      </select>
      <br />
      <br />
      <label>Best bike:</label>
      <select onChange={(e) => PointsCounter(e)}>
        <option>Select</option>
        <option>BMW</option>
        <option>KTM</option>
      </select>
      <br/>
      <br/>
      <label>Your Career</label>
      <select onChange={(e) => PointsCounter(e)}>
        <option>Select</option>
        <option>Engineer</option>
        <option>MBA</option>
      </select>
      <br/>
      <br/>
      <h5>Your Score is: {count}</h5>
      
    </div>
  );
}
export default Quiz;
