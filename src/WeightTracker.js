import React from "react";
import "./WeightTracker.css";
import WeightChart from "./WeightChart";

class WeightTracker extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitWeight = this.submitWeight.bind(this);

    this.state = {
      value: "",
      weightList: {}
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  submitWeight = event => {
    event.preventDefault(); // Prevent default page reloading after submitting
    const value = this.state.value;
    const weightList = this.state.weightList;

    // Check that input is not empty
    if (value === null || value === "") {
      alert("Weight can not be empty");
    } else {
      let date = new Date().toLocaleTimeString();
      weightList[date] = value + " kg";
    }

    // console.log(value)

    // Clears the form after submitting
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <form className="weightForm">
          <label>
            Enter your bodyweight in kilograms:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Weight"
              autoFocus
            />
          </label>
          <input
            className="btn"
            type="submit"
            value="Submit"
            onClick={this.submitWeight}
          />
        </form>
        <WeightChart weightList={this.state.weightList} />
      </div>
    );
  }
}

export default WeightTracker;
