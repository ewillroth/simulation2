import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import "./StepThree.css";
import { updateMortgage, updateRent, resetForm } from "../../redux/reducer";
import axios from "axios";

const StepThree = (props) => {
	return (
		<div className="Step">
			<div className="dashheader">
				<h1>Add New Listing</h1>
				<Link onClick={() => props.resetForm()} className="cancel" to="/">
					Cancel
				</Link>
			</div>
			<div className="flexcolumn">
				<h4>Recommended Rent:</h4>
				<div>
					<p className="formlabel">Monthly Mortgage Amount</p>
					<input onChange={(e) => props.updateMortgage(e.target.value)} className="imageurl"></input>
				</div>
				<div>
					<p className="formlabel">Desired Monthly Rent</p>
					<input onChange={(e) => props.updateRent(e.target.value)} className="imageurl"></input>
				</div>
			</div>
			<div className="dashfooter">
				<Link to="/new/2" className="nextstep">
					Previous Step
				</Link>
				<Link 
				onClick={
						axios.post('/api/houses', {
							name: props.name,
							address: props.address,
							city: props.city,
							state: props.state,
							zip: props.zip,
							image: props.image,
							mortgage: props.mortgage,
							rent: props.rent
						})
					.then(response=>console.log(response))
					.catch(err=>console.log(err))} 
				to="/"
				className="complete"
				>
					Complete
				</Link>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		name: state.name,
		address: state.address,
		city: state.city,
		state: state.state,
		zip: state.zip,
		image: state.image,
		mortgage: state.mortgage,
		rent: state.rent
	}
}

export default connect(mapStateToProps, { updateMortgage, updateRent, resetForm })(StepThree);
