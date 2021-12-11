import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import AmCharts from "@amcharts/amcharts3-react"
// import ajax from "ajax";

/**
 * Create the chart
 */
 function createChart(data) {
  
  return AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": data,
    "valueAxes": [{
      "gridAlpha": 0.07,
      "position": "left",
      "title": "Workout Weight Progress"
    }],
    "graphs": [{
      "lineThickness": 2,
      "bullet": "round",
      "title": "Barbell Bench Press",
      "valueField": "w1"
    }, {
      "lineThickness": 2,
      "bullet": "diamond",
      "bulletSize": 12,
      "title": "Incline Dumbbell Press",
      "valueField": "w2"
    }, {
      "lineThickness": 2,
      "bullet": "square",
      "title": "Barbell Squat",
      "valueField": "w3"
    }, {
      "lineThickness": 2,
      "bullet": "diamond",
      "bulletSize": 12,
      "title": "Deadlift",
      "valueField": "w4"
    },{
      "lineThickness": 2,
      "bullet": "diamond",
      "bulletSize": 12,
      "title": "Bicep Curls",
      "valueField": "w5"
    }],
    "chartCursor": {},
    "categoryField": "date",
    "categoryAxis": {
      "startOnAxis": true
    },
    "legend": {
      "useGraphSettings": true
    }
  });
  
}

/**
 * Define initial data
 */
var sourceData = [
  [ '11/1/2021', 135, 55, 200, 180, 10 ],
  [ '11/2/2021', 135, 55, 205, 180, 10 ],
  [ '11/2/2021', 140, 55, 205, 185, 15 ],
  [ '11/3/2021', 140, 60, 210, 195, 15 ],
  [ '11/4/2021', 145, 60, 215, 205, 20 ],
  [ '11/5/2021', 150, 60, 215, 205, 20 ],
  [ '11/6/2021', 155, 65, 220, 210, 25 ],
  [ '11/7/2021', 160, 65, 225, 220, 25 ],
  [ '11/8/2021', 160, 65, 225, 225, 25 ],
  [ '11/9/2021', 165, 70, 230, 225, 25 ],
  [ '11/10/2021', 165, 70, 230, 235, 30 ],
  [ '11/11/2021', 170, 75, 235, 245, 35 ],
  [ '11/12/2021', 175, 75, 235, 255, 45 ],
  [ '11/13/2021', 180, 75, 240, 255, 55 ],
  [ '11/14/2021', 180, 80, 245, 255, 65 ],
  [ '11/15/2021', 185, 80, 245, 260, 65 ],
  [ '11/16/2021', 190, 85, 250, 275, 65 ],
  [ '11/17/2021', 195, 90, 255, 285, 65 ],
  [ '11/18/2021', 200, 95, 270, 295, 70 ]
];

/**
 * Create the Handsontable editable grid
 */
AmCharts.ready(function() {
  
  var container = document.getElementById("data");
  var chart;
  
  var hot = new Handsontable(container, {
    "data": sourceData,
    "height": 400,
    "colHeaders": ['Date', 'Barbell Bench Press 4x10', 'Incline Dumbbell Press 3x10', 'Barbell Squat 5x5', 'Deadlift 3x10', 'Bicep Curls 4x10'],
    "rowHeaders": true,
    "stretchH": 'all',
    "columnSorting": true,
    "contextMenu": true,
    "licenseKey": 'non-commercial-and-evaluation',
    "columns": [{type: "date", dateFormat: 'MM/DD/YYYY', allowInvalid: false}, {type: "numeric"}, {type: "numeric"}, {type: "numeric"}, {type: "numeric"}, {type: "numeric"}],
    "afterInit": function(firstTime) {
      chart = createChart(
        formatChartData( this.getData() )
      );
    },
    "afterChange": function(changes, source) {
      if (changes === null)
        return;
      chart.dataProvider = formatChartData(this.getData());
      chart.validateData();
    }
    
  });
  
  // define function which reformats table data into
  // format suitable for the chart
  function formatChartData(tableData) {
    var chartData = [];
    for(var i = 0; i < tableData.length; i++) {
      chartData.push({
        "date":         tableData[i][0],
        "w1":         tableData[i][1],
        "w2":  tableData[i][2],
        "w3":     tableData[i][3],
        "w4":  tableData[i][4],
        "w5":  tableData[i][5]
      });
    }
    return chartData;
  }
 
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();