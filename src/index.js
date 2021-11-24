import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
// import ajax from "ajax";

const data = [
  [1,'1/1/2021', 10, 15, 10, 20, 15],
  [2,'2/1/2021', 12, 20, 16, 22, 18],
  [4,'3/1/2021', 13, 27, 22, 23, 21],
  [5,'4/1/2021', 15, 32, 28, 25, 25],
  [6,'5/1/2021', 17, 38, 40, 26, 28],
  [7,'6/1/2021', 18, 40, 42, 29, 31],
  [8,'7/1/2021', 20, 41, 44, 30, 34],
  [9,'8/1/2021', 25, 43, 46, 32, 38],
  [10,'9/1/2021', 31, 45, 47, 40, 42],
  [11,'10/1/2021', 36, 46, 48, 45, 45],
  [12,'11/1/2021', 42, 47, 50, 43, 48]
]

let container = document.querySelector('.handsontable-container');

let hot = new Handsontable(container,{
  data: data,       // Initiating handsontable object 
  licenseKey: "non-commercial-and-evaluation",
  height: "auto",
  weight: "auto",
  rowHeaders: true,
  colHeaders: ['Date', 'chest2','leg1', 'leg2','back1', 'back2',],
  columns: [
    {data: 1, type: "date", allowInvalid: false},
    {data: 2, type: "numeric"},
    {data: 3, type: "numeric"},
    {data: 4, type: "numeric"},
    {data: 5, type: "numeric"},
    {data: 6, type: "numeric"},
  ],
  filters: true,
  contextMenu: ['col_left', 'col_right', 'remove_col', 'row_above', 'row_below', 'remove_row']
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();