import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);

  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Fruits Info</h1>
        {data && data.map((item) => (
          <div key={item.name}>
            <li className="list_data">
              <h3>{item.name}</h3>
              <p>Benefits: {item.benefits}</p>
              <p>Importance: {item.importance}</p>
              <p>Time to eat: {item.best_time_to_intake}</p>
            </li>
          </div>
        ))}
     </ul>
    </>
  )
}

export default FetchData

