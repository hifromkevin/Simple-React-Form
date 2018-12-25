import React from 'react';

import ResultsPage from './ResultsPage.jsx';

const CreditCard = ({ creditCardBrand, creditCardNumber, expireMonth, expireYear, changeState }) => (
  <div>
    <label htmlFor="creditCardBrand">Brand 
      <input 
        type="text" 
        id="creditCardBrand" 
        value={creditCardBrand}
        onChange={ e => changeState('creditCardBrand', e.target.value) } 
      />
    </label>
    <label htmlFor="creditCardNumber">Credit Card Number 
      <input 
        type="text" 
        id="creditCardNumber" 
        value={creditCardNumber}
        onChange={ e => changeState('creditCardNumber', e.target.value) } 
      />
    </label>
    <label htmlFor="expireMonth">Expire Month 
      <input
        type="text" 
        id="expireMonth" 
        value={expireMonth}
        onChange={ e => changeState('expireMonth', e.target.value) } 
      />
    </label>
    <label htmlFor="expireYear">Expire Year 
      <input 
        type="text" 
        id="expireYear" 
        value={expireYear}
        onChange={ e => changeState('expireYear', e.target.value) } 
      />
    </label>

    <button onClick={
      () => {
        changeState('page', 'ResultsPage')
      }
    }>Next: Results</button>
  </div>
);

export default CreditCard;