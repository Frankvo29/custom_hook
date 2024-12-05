import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchYogaData = () => {
  const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  console.log(data);

  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Yoga Info</h1>
        {data && data.map((item) => (
          <div key={item.benefits}>
            <li className="list_data">
              <h3>{item.name}</h3>
              <p>Benefits: {item.benefits}</p>
              <p>Duration: {item.time_duration}</p>
            </li>
          </div>
        ))}
     </ul>
    </>
  )
}

export default FetchYogaData;

