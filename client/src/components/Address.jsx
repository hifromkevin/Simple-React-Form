import React from 'react';

import CreditCard from './CreditCard.jsx';

const PersonalInformation = ({ address1, address2, city, state, zip, changeState, statestate }) => (
  <div>
    <label htmlFor="address1">Address 
      <input 
        type="text" 
        id="address1" 
        value={address1}
        onChange={ e => changeState('address1', e.target.value) } 
      />
    </label>
    <label htmlFor="address2">Address 2
      <input 
        type="text" 
        id="address2" 
        value={address2}
        onChange={ e => changeState('address2', e.target.value) } 
      />
    </label>
    <label htmlFor="city">City 
      <input
        type="text" 
        id="city" 
        value={city}
        onChange={ e => changeState('city', e.target.value) } 
      />
    </label>
    <label htmlFor="state">State 
      <input 
        type="text" 
        id="state" 
        value={state}
        onChange={ e => changeState('state', e.target.value) } 
      />
    </label>
    <label htmlFor="zip">Zip Code 
      <input 
        type="text" 
        id="zip" 
        value={zip}
        onChange={ e => changeState('zip', e.target.value) } 
      />
    </label>

    <button onClick={
      () => { statestate() }
    }>STate</button>

    <button onClick={
      () => {
        changeState('page', 'CreditCard')
      }
    }>Next: Credit Card Information</button>
  </div>
);

export default PersonalInformation;