import React from "react";
import Chart from "react-google-charts";

const options = {
  width: 1600,
  height: 480,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5
};

class BudgetGauge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      budget: this.props.budget
    }
  }

  getData(){
    return [["Label", "Value"], ["Budget", this.state.budget]];
  }

  render() {
    return (
      <div style={{position:'absolute',top: '300px', right:'50px'}}>
        <Chart
          chartType="Gauge"
          width="800px"
          height="800px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}

export default BudgetGauge;
