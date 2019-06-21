import React from "react";
import "./App.css";
import WeightTracker from "./WeightTracker";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Weight Tracker</h1>
        <WeightTracker />
      </div>
    );
  }
}

export default App;
