import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react';
import { Line } from 'react-chartjs-2';

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  
  const state = {
    labels: ['1/1/2021', '2/1/2021', '3/1/2021', '4/1/2021', '5/1/2021', '6/1/2021', '7/1/2021', '8/1/2021', '9/1/2021', '10/1/2021', '11/1/2021'],
    datasets:  [{
      label: 'chest2',
        fill: false,
        lineTension: 0.5,
        backgroundColor: random_rgba(),
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
      data: [10,12,13,15,17,18,20,25,31,36,42],
  
    },{
      label: 'leg1',
      fill: false,
      lineTension: 0.5,
      backgroundColor: random_rgba(),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [15,20,27,32,38,40,41,43,45,46,47],
    },{
      label: 'leg2',
      fill: false,
      lineTension: 0.5,
      backgroundColor: random_rgba(),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10,16,22,28,40,42,44,46,47,48,50],
    },{
      label: 'back1',
      fill: false,
      lineTension: 0.5,
      backgroundColor: random_rgba(),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [20,22,23,25,26,29,30,32,40,45,43],
    },{
      label: 'back2',
      fill: false,
      lineTension: 0.5,
      backgroundColor: random_rgba(),
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [15,18,21,25,28,31,34,38,42,45,48],
    }]
  }
  
  export default class App extends React.Component {
    render() {
      return (
        <div>
          <h2>Workout graph</h2>
          <Line
            data={state}
            width={1500}
            height={500}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  }  