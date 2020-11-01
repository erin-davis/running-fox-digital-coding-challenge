import React, {useState} from 'react'
import "../styles/pricing.css"; 
import {hourlyIcon, fixedRateIcon} from "../icons/tabler-icons.js";
import {Slider} from "@material-ui/core";



function Pricing() {
  const [sliderVal, setSliderVal] = useState(40);
  
  const [rates, setRates] = useState({
    fixedRate: ""
  });
  const [activeTab1, setActiveTab1] = useState(true);
  const [activeTab2, setActiveTab2] = useState(!activeTab1);

  const changeActive = (e) => {
    // e.stopPropagation();
    setActiveTab1(!activeTab1);
    setActiveTab2(!activeTab2);
  };

  const handleRates = (e) => {
    setRates({ ...rates, [e.target.name]: [e.target.value] });
  };

  const handleSlider = (e, newSliderVal) =>{
    setSliderVal(newSliderVal);
  }

  return (
    <div className="pricing">
      <div className="pricing-text">
        <h1>Set up your pricing</h1>
      <p>Please set up your hourly or fixed rate so that the client is aware of your pricing.</p>
      </div>
      <div className="charge">
        <article className={`hourly ${activeTab1 ? "active" : ""}`} onClick={changeActive}>
          <span>{hourlyIcon}</span>
          <p>Hourly</p>
        </article>
        <article className={`fixed ${activeTab2 ? "active" : ""}`} onClick={changeActive}>
          <span>{fixedRateIcon}</span>
          <p>Fixed</p>
        </article>
      </div>
      <div className="rates-slider-input">
      <div className={`hourly-rate ${activeTab1 ? "active-rate" : "inactive"}`}>
      <div className="rate-text">
        <h2 id="dollar">$</h2>
        <h1>{sliderVal}</h1>
        <h2>/hour</h2>
      </div>
      <Slider
          defaultValue={sliderVal}
          onChange={handleSlider}
          className="rate-slider"
          min={20}
          max={300}
          valueLabelDisplay="off"
        />
        <div className="slider-values">
        <p>$20</p>
        <p>$300</p>
        </div>
      </div>
        <div className={`fixed-rate ${activeTab2 ? "active-rate" : "inactive"}`}>
        <input
          type="number"
          placeholder="Total Rate"
          id="fixed-rate-input"
          value={rates.totalPay}
          name="fixed_rate"
          onChange={handleRates}
        />
        <h1>/ Flat Rate</h1>
      </div>
      </div>
    </div>
  )
}

export default Pricing
