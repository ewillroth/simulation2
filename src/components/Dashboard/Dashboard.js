import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Dashboard.css';

const Dashboard = (props) => {

	const map = props.houses.map(house=>{
		return <ul className="displayHouse" key = {house.id}>
			<li>Property Name: {house.name}</li>
			<li>Address: {house.address}</li>
			<li>City: {house.city}</li>
			<li>State: {house.state}</li>
			<li>Zip: {house.zipcode}</li>
		</ul>
	})
	return <div className="Dashboard">
		<h1>Dashboard</h1>
		<Link className="new" to='/wizard'>Add New Property</Link>
		{map}
	</div>;

}
const mapStateToProps = (state) => {
	return {
		houses: state.houses
	}
}

export default connect(mapStateToProps)(Dashboard);
