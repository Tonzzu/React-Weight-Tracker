import React from "react";
import "./App.css";
import WeightForm from "./WeightForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Weight Tracker</h1>
        <WeightForm />
      </div>
    );
  }
}

export default App;
