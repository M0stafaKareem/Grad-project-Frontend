import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SplineAreaChart = (props) => {
  const options = {
    animationEnabled: true,
    width: 535,
    height: 324,
    title: {
      text: "",
    },
    axisY: {
      //  title: "Net Generation (in Billion kWh)",
      includeZero: false,
      //    suffix: "",
    },
    data: [
      {
        type: "splineArea",
        yValueFormatString: "#### students",
        //showInLegend: true,
        //legendText: "kWh = one kilowatt hour",
        dataPoints: [
          { label: "F", y: props.F },
          { label: "D", y: props.D },
          { label: "D+", y: props.Dplus },
          { label: "C-", y: props.Cminus },
          { label: "C", y: props.C },
          { label: "C+", y: props.Cplus },
          { label: "B-", y: props.Bminus },
          { label: "B", y: props.B },
          { label: "B+", y: props.Bplus },
          { label: "A-", y: props.Aminus },
          { label: "A", y: props.A },
          { label: "A+", y: props.Aplus },
        ],
      },
    ],
  };

  return (
    <div>
      {/*       <h1>React Spline Area Chart</h1>
       */}
      <CanvasJSChart options={options} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default SplineAreaChart;
