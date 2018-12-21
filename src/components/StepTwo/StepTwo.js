import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import "./StepTwo.css";
import { updateImage, resetForm } from "../../redux/reducer";

const StepTwo = (props) => {
	return <div className="Step">
		<div className="dashheader">
			<h1>Add New Listing</h1>
			<Link onClick={() => props.resetForm()} className="cancel" to="/">
				Cancel
				</Link>
		</div>
		<div className="flexcolumn">
			<div>
				<p className="formlabel">Image URL</p>
				<input onChange={(e) => props.updateImage(e.target.value)} className="imageurl"></input>
			</div>
		</div>
		<div className="dashfooter">
			<Link to="/new/1" className="nextstep">Previous Step</Link>
			<Link to="/new/3" className="nextstep">Next Step</Link>
		</div>
	</div>;
};
const mapStateToProps = (state) => {

}
export default connect(mapStateToProps, { updateImage, resetForm })(StepTwo);
