import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Dashboard.css';
import axios from 'axios';
import { updateHouses, resetForm } from '../../redux/reducer';

class Dashboard extends Component{
	componentDidMount() {
		axios
			.get('http://localhost:4001/api/houses')
			.then(response => {
				this.props.updateHouses(response.data)
			})
			.catch(err => console.log(err))

		this.props.resetForm()
	}

	componentDidUpdate(prevProps){
		if(this.props.houses!==prevProps.houses){
			this.setState()
		}
	}
	render(){
		const map = this.props.houses.map(house=>{
			return <div className="housebox" key={house.id}>
					<button 
						onClick={()=>{
							axios.delete(`/api/houses/${house.id}`)
							.then(response=>
								axios
								.get('http://localhost:4001/api/houses')
								.then(response=>{this.props.updateHouses(response.data)})
								.catch(err=>console.log(err)))
							.catch(err=>console.log(err))
							}} 
						className="deletex">x</button>
					<ul className="displayHouse">
						<li>Property Name: {house.name}</li>
						<li>Address: {house.address}</li>
						<li>City: {house.city}</li>
						<li>State: {house.state}</li>
						<li>Zip: {house.zipcode}</li>
					</ul>
				<Link to={`/houses/${house.id}`}>More Information</Link>
				</div>;
		})
		return <div className="Dashboard">
				<div className="dashheader">
					<h1>Dashboard</h1>
					<Link className="new" to="/new/1">
						Add New Property
					</Link>
				</div>
				<div className="horizontalLine" />
				<h3 className="homelistings">Home Listings</h3>
				{map}
			</div>;
	}
}
const mapStateToProps = (state) => {
	return {
		houses: state.houses
	}
}

export default connect(mapStateToProps, { updateHouses, resetForm })(Dashboard);
