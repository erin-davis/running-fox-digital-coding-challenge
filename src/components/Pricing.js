import React, {useState} from 'react'
import "../styles/pricing.css"; 
import {hourlyIcon, fixedRateIcon} from "../icons/tabler-icons.js";


function Pricing() {
  const [cost, setCost] = useState({
    rate: 40
  })

  const activeCharge = e =>{
    e.preventDefault();
  }

  const sliderChange = e =>{
    
  }

  return (
    <div className="pricing">
      <h1>Set up your pricing</h1>
      <p>Please set up your hourly or fixed rate so that the client is aware of your pricing.</p>
      <span>
        <article>
          {hourlyIcon}
          <p>Hourly</p>
        </article>
        <articl>
          {fixedRateIcon}
          <p>Fixed</p>
        </articl>
      </span>
      <div className="rate-slider-cont">
        <input 
          type="range"
          min="20"
          max="300"
          value={cost.rate}
          className="rate-slider"
        />
        <p>$20</p>
        <p>$300</p>
      </div>
    </div>
  )
}

export default Pricing
