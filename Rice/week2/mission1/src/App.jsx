import { useState } from "react";
import Task from "./components/Task";

function App() {
  return (
    <>
      <h1>UMC Study Plan</h1>
      <input type="text" placeholder="UMC 스터디 계획을 작성해보세요!" />
      <div>
        <div>
          <p>해야 할 일</p>
          <Task></Task>
        </div>
        <div>
          <p>해낸 일</p>
          <Task></Task>
        </div>
      </div>
    </>
  );
}

export default App;
