import React from "react";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import "./StepOne.css";
import { updateName, updateAddress, updateCity, updateState, updateZip} from "../../redux/reducer";

const StepOne = (props) => {
	return <div className="Step">
			<div className="dashheader">
				<h1>Add New Listing</h1>
			<Link className="cancel" to="/">
					Cancel
				</Link>
			</div>
			<div className="flexcolumn">
				<div>
					<p className="formlabel">Property Name</p>
					<input onChange={(e)=>props.updateName(e.target.value)} className="name" />
				</div>
				<div>
					<p className="formlabel">Address</p>
					<input onChange={(e) => props.updateAddress(e.target.value)} className="address" />
				</div>
				<div className="flexrow">
					<div>
						<p className="formlabel">City</p>
						<input onChange={(e) => props.updateCity(e.target.value)} className="city" />
					</div>
					<div>
						<p className="formlabel">State</p>
						<input onChange={(e) => props.updateState(e.target.value)} className="state" />
					</div>
					<div>
						<p className="formlabel">Zip code</p>
						<input onChange={(e) => props.updateZip(e.target.value)} className="zip" />
					</div>
				</div>
			</div>
			<div className="dashfooter">
				<div />
				<Link to="/new/2" className="nextstep">
					Next Step
				</Link>
			</div>
		</div>;
};
const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(StepOne);
