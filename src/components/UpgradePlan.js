import React, {useState} from 'react'
import "../styles/upgradePlan.css";
import {masterCardLogo, visaLogo, forwardArrow, blueShip} from "../icons/tabler-icons.js"; 


function UpgradePlan() {
  const [plan, setPlan] = useState({
    type: "Small Business",
    rate: "8,350",
    card: [
      {
        company: "Master Card",
        number: "2344 **** **** 8880",
        cvc: "",
        id: 1
      },
      {
        company: "Visa",
        number: "8890 **** **** 1234",
        cvc: "",
        id: 2
      }
    ]
  });

  //handler to add card

  //handler for the cvc
  const submitForm = (e) => {
    e.preventDefault();

  };
  //payment button will have to be styled
  const addPayment = (e) => {
    e.preventDefault();
    window.alert("You've added a new payment method");
  };

  return (
    <div className="upgrade-plan-cont">
      <div className="upgrade-plan">
      <h1>Upgrade your plan</h1>
      <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
      <div className="plan-type">
        <img src={blueShip} alt="Small Blue Ship" className="plan-img"/>
        <div className="plan-type-text">
          <article>
            <h1>Small Business</h1>
            <p>CHANGE PLAN</p>
          </article>
          <div className="plan-type-rate">
            <h2>{plan.rate} / year</h2>
          </div>
        </div>
      </div>
      <form className="payment-details-form" onSubmit={submitForm}>
        <div className="payment">
          <h2>Payment details</h2>
          {plan.card.map((card, index) => {
            return (
              <div className="card-info" key={card.id}>
                {card.company == "Master Card" ? (
                  <img
                    src={masterCardLogo}
                    alt={`${card.company}`}
                    className="card-logo"
                  />
                ) : (
                  <img
                    src={visaLogo}
                    alt={`${card.company}`}
                    className="card-logo"
                  />
                )}
                <label htmlFor={`card-${card.id}`}>Credit Card</label>
                <p>{card.number}</p>
                <input
                  id={`card-${card.id}`}
                  type="number"
                  min="100"
                  max="999"
                  placeholder="CVC"
                />
              </div>
            );
          })}
          <button onClick={addPayment} className="add-payment">ADD PAYMENT METHOD</button>
        </div>
        <input type="email" placeholder="Email address" />
        <button type="submit">Proceed to payment {forwardArrow}</button>
      </form>
      </div>
    </div>
  )
}

export default UpgradePlan
