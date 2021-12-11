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
      "title": "Cars",
      "valueField": "cars"
    }, {
      "lineThickness": 2,
      "bullet": "diamond",
      "bulletSize": 12,
      "title": "Motorcycles",
      "valueField": "motorcycles"
    }, {
      "lineThickness": 2,
      "bullet": "square",
      "title": "Bicycles",
      "valueField": "bicycles"
    }],
    "chartCursor": {},
    "categoryField": "year",
    "categoryAxis": {
      "startOnAxis": true
    }
  });
  
}

/**
 * Define initial data
 */
var sourceData = [
  [ '01/11/2021', 135, 55, 200 ],
  [ '02/11/2021', 135, 55, 205 ],
  [ '03/11/2021', 140, 55, 205 ],
  [ '04/11/2021', 140, 60, 210 ],
  [ '05/11/2021', 145, 60, 215 ],
  [ '06/11/2021', 150, 60, 215 ],
  [ '07/11/2021', 155, 65, 220 ],
  [ '08/11/2021', 160, 65, 225 ],
  [ '09/11/2021', 160, 65, 225 ],
  [ '10/11/2021', 165, 70, 230 ],
  [ '11/11/2021', 165, 70, 230 ],
  [ '12/11/2021', 170, 75, 235 ],
  [ '13/11/2021', 175, 75, 235 ],
  [ '14/11/2021', 180, 75, 240 ],
  [ '15/11/2021', 180, 80, 245 ],
  [ '16/11/2021', 185, 80, 245 ],
  [ '17/11/2021', 190, 85, 250 ],
  [ '18/11/2021', 195, 90, 255 ],
  [ '19/11/2021', 200, 95, 270 ]
];

/**
 * Create the Handsontable editable grid
 */
AmCharts.ready(function() {
  
  var container = document.getElementById("data");
  var chart;
  
  var hot = new Handsontable(container, {
    "data": sourceData,
    "height": 234,
    "colHeaders": ['Date', 'Barbell Bench Press', 'Incline Dumbbell Press', 'Barbell Squat'],
    "rowHeaders": true,
    "stretchH": 'all',
    "columnSorting": true,
    "contextMenu": true,
    "licenseKey": 'non-commercial-and-evaluation',
    "columns": [{type: "date", allowInvalid: false}, {type: "numeric"}, {type: "numeric"}, {type: "numeric"}],
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
        "year":         tableData[i][0],
        "cars":         tableData[i][1],
        "motorcycles":  tableData[i][2],
        "bicycles":     tableData[i][3]
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