import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import PersonalInformation from './PersonalInformation.jsx';
import Address from './Address.jsx';
import CreditCard from './CreditCard.jsx';
import ResultsPage from './ResultsPage.jsx';
import Broken from './Broken.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'PersonalInformation',
			firstName: '',
			lastName: '',
			emailAddress: '',
			password: '',
			address1: '',
			address2: 'xx',
			city: '',
			state: '',
			zip: '',
			creditCardBrand: '',
			creditCardNumber: '',
			expireMonth: '',
			expireYear: '',
			cvv: ''
		}

		this.changeState = this.changeState.bind(this);
		this.statestate = this.statestate.bind(this);
	}

	changeState(key, val) {
		this.setState({
			[key]: val
		})
	}

	statestate() {
		console.log(this.state)
	}

	showPage() {
		let page = this.state.page;
		if (page === "PersonalInformation") {
			return <PersonalInformation 
								firstName={this.state.firstName} 
								lastName={this.state.lastName}
								emailAddress={this.state.emailAddress}
								password={this.state.password}
								changeState={this.changeState}
								statestate={this.statestate}
							/>
		}	else if (page === "Address") {
			return <Address 
								address1={this.state.address1} 
								address2={this.state.address2}
								city={this.state.city}
								state={this.state.state}
								zip={this.state.zip}
						 	  changeState={this.changeState}
								statestate={this.statestate}
						 />
		} else if (page === "CreditCard") {
			return <CreditCard 
								creditCardBrand={this.state.creditCardBrand} 
								creditCardNumber={this.state.creditCardNumber}
								expireMonth={this.state.expireMonth}
								expireYear={this.state.expireYear}
								cvv={this.state.cvv}
						 	  changeState={this.changeState}
						 />
		} else if (page === "ResultsPage") {
			return <ResultsPage 
								firstName={this.state.firstName} 
								lastName={this.state.lastName}
								emailAddress={this.state.emailAddress}
								password={this.state.password}
								address1={this.state.address1} 
								address2={this.state.address2}
								city={this.state.city}
								state={this.state.state}
								zip={this.state.zip}
								creditCardBrand={this.state.creditCardBrand} 
								creditCardNumber={this.state.creditCardNumber}
								expireMonth={this.state.expireMonth}
								expireYear={this.state.expireYear}
								cvv={this.state.cvv}
						 />
		} else {
			return <Broken 
							  changeState={this.changeState}
						 />
		}
	}

	render() {
		return (
			<div>
				{this.showPage()}
			</div>
		)
	}
}
