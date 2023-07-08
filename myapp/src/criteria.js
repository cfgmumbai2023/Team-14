import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './criteria.css'
import 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
import './Academics.css'

function Criteria() {
  const [key, setKey] = useState('disability');
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
  return (
    <Tabs
        
      activeKey={key}
      onSelect={(k) => setKey(k)}
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="disability" title="Disability" className='tab'>
      <Bar className='barintab'
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
      </Tab>
      <Tab eventKey="mobilestat" title="Mobile Status">
        Tab content for Profile
      </Tab>
      <Tab eventKey="area" title="Area">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Criteria;