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
      budget: props.mybudget,
      monthsum: props.mymonthsum
    }
    console.log("cons: ", props)
  }

  getData(){
    var mymonthsum = this.props.mymonthsum;
    var mybudget = this.props.mybudget;
    var ratio = (mymonthsum/mybudget)*100;
    return [['Label', 'Value'],["Expenses/Budget", ratio]];
  }

  render() {
    console.log('BUDGET: ', this.state.monthsum)
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
