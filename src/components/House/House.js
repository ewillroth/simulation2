import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { updateHouses } from "../../redux/reducer";
import './House.css';

class House extends Component{
	componentDidMount(){
		if (this.props.match.params.id) {
			axios
				.get(`/api/houses/${this.props.match.params.id}`)
				.then(response =>this.props.updateHouses(response.data))
				.catch(err => console.log(err));
		}
	}
	render(){
		return <div className="House">
				{this.props.houses.length==1?<h1>House</h1>:null}
				{this.props.houses.length==1?<h3>Name: {this.props.houses.map(house => house.name)}</h3>:null}
				{this.props.houses.length==1?<h3>Address: {this.props.houses.map(house => house.address)}</h3>:null}
				{this.props.houses.length==1?<h3>City: {this.props.houses.map(house => house.city)}</h3>:null}
				{this.props.houses.length==1?<h3>State: {this.props.houses.map(house => house.state)}</h3>:null}
				{this.props.houses.length==1?<h3>Zipcode: {this.props.houses.map(house => house.zipcode)}</h3>:null}
				{this.props.houses.length==1?<h3>
					Monthly Mortgage: {this.props.houses.map(house => house.mortgage)}
				</h3>:null}
				{this.props.houses.length==1?<h3>Desired Rent: {this.props.houses.map(house => house.rent)}</h3>:null}
				{this.props.houses.length==1?<img className="housepic" src={this.props.houses.map(house => house.image)} alt="house" />:null}
				<br />
				<br />
				<Link to="/">Back</Link>
			</div>;
	}
}
const mapStateToProps= (state) => {
	return {
		houses: state.houses
	}
}


export default connect(mapStateToProps, {updateHouses})(House);
