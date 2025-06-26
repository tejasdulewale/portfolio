import React from 'react'
import  '../css/service.css'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <div className='services' id="service">
          <div className="servicename">SERVICES</div>
           <h2 className="serviceprovided">services providing</h2>
           <div className="servicecontainer">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            
           </div>
    </div>
  )
}

export default Services