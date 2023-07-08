import React from 'react';
// import { useNavigate } from "react-router-dom";
import 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import './Academics.css'



function Academics() {
    const state = {
        labels: ['Quarter-1', 'Quarter-2', 'Quarter-3',
                 'Quarter-4'],
        datasets: [
          {
            label: 'Addition',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81]
          }
        ]
      }
      // let navigate = useNavigate(); 
      // const routeChange = () =>{ 
      //   let path = `newPath`; 
      //   navigate(path);
      // }
    return (
      <div className='bargraph'>
        <Bar
          Link to = "/criteria"
          // onClick={routeChange}
          data={state}
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

export default Academics;