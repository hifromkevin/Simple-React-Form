import React from 'react';

const ResultsPage = ({ firstName, lastName, emailAddress, password, address1, address2, city, state, zip, creditCardBrand, creditCardNumber, expireMonth, expireYear }) => (
  <div>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email Address: {emailAddress}</p>
    <p>Password: {password}</p>
    <p>Address: {address1}{address2 && `, ${address2}`}<br />
                {city}, {state} {zip}
    </p>
    <p>Credit Card Information: {creditCardBrand}<br />
    {creditCardNumber}<br />
    Expires {expireMonth}/{expireYear}</p>
  </div>
);

export default ResultsPage;