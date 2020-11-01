import React, {useState} from 'react'
import "../styles/pricing.css"; 
import {hourlyIcon, fixedRateIcon} from "../icons/tabler-icons.js";
import RangeSlider from "react-bootstrap-range-slider";



function Pricing() {
  const [sliderVal, setSliderVal] = useState(40);

  const activeCharge = e =>{
    e.preventDefault();
  }

  //with the articles for the pricing, i'll have to make them divs that show two different things. when fixed is shown, it will remove the range and allow for a $ [fixed rate] total something like that!!

  return (
    <div className="pricing">
      <div className="pricing-text">
        <h1>Set up your pricing</h1>
      <p>Please set up your hourly or fixed rate so that the client is aware of your pricing.</p>
      </div>
      <div className="charge">
        <article className="price-type">
          {hourlyIcon}
          <p>Hourly</p>
        </article>
        <article className="price-type">
          {fixedRateIcon}
          <p>Fixed</p>
        </article>
      </div>
      <div className="rate-slider-cont">
      <h1>${sliderVal} /hour</h1>
      <RangeSlider
          value={sliderVal}
          onChange={(e) => setSliderVal(e.target.value)}
          className="rate-slider"
          min={20}
          max={300}
          tooltip="off"
        />
        <div className="slider">
        <p>$20</p>
        <p>$300</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
