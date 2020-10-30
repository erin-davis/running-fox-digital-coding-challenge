import React, {useState} from 'react'
import "../styles/upgradePlan.css"; 


function UpgradePlan() {
  const [plan, setPlan] = useState({
    type: "Small Business",
    rate: "8,350",
    card: [
      {
        company: "Master Card",
        number: "2344 **** **** 8880",
        cvc: ""
      },
      {
        company: "Visa",
        number: "8890 **** **** 1234",
        cvc: ""
      }
    ]
  })

  //handler to add card

  //handler for the cvc
  return (
    <div className="upgrade-plan">
      <h1>Upgrade your plan</h1>
      <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
      <div className="plan-type">
        <h1>Small Business</h1>
        <p>CHANGE PLAN</p>
        <h1>{plan.rate} / year</h1>
      </div>
      <div className="payment">
        <h2>Payment details</h2>
        <span>
          <p>Credit Card</p>
          <p>{plan.card[0].number}</p>
          <input
          type="number"
          min="100"
          max="999"
          placeholder="CVC"
          />
        </span>
        <span>
          <p>Credit Card</p>
          <p>{plan.card[1].number}</p>
          <input
          type="number"
          min="100"
          max="999"
          value="88"
          placeholder="CVC"
          />
        </span>
        <p>ADD PAYMENT METHOD</p>
      </div>
      <input
        type="email"
        placeholder="Email address"
        />
        <button>Proceed to payment [arrow-tabler-icon]</button>
    </div>
  )
}

export default UpgradePlan
