import React from 'react';

import Address from './Address.jsx';
import ResultsPage from './ResultsPage.jsx';

const PersonalInformation = ({ firstName, lastName, emailAddress, password, changeState, statestate }) => (
  <div>
    <label htmlFor="firstName">First Name 
      <input 
        type="text" 
        id="firstName" 
        value={firstName}
        onChange={ e => changeState('firstName', e.target.value) } 
      />
    </label>
    <label htmlFor="lastName">Last Name 
      <input 
        type="text" 
        id="lastName" 
        value={lastName}
        onChange={ e => changeState('lastName', e.target.value) } 
      />
    </label>
    <label htmlFor="emailAddress">Email Address 
      <input
        type="text" 
        id="emailAddress" 
        value={emailAddress}
        onChange={ e => changeState('emailAddress', e.target.value) } 
      />
    </label>
    <label htmlFor="password">Password 
      <input 
        type="text" 
        id="password" 
        value={password}
        onChange={ e => changeState('password', e.target.value) } 
      />
    </label>

    <button onClick={
      () => { statestate() }
    }>STate</button>

    <button onClick={
      () => {
        changeState('page', 'Address')
      }
    }>Next: Address Information</button>
  </div>
);

export default PersonalInformation;