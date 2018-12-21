import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';
import {updateHouses} from './redux/reducer';

class App extends Component {
	componentDidMount(){
		axios
		.get('http://localhost:4001/api/houses')
		.then(response=>{
			this.props.updateHouses(response.data)
		})
		.catch(err=>console.log(err))
	}
	
	render() {
		return (
			<HashRouter>
				<div className="App">
					<Header/>
					{routes}
				</div>
			</HashRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		houses: state.houses
	}
}

export default connect(mapStateToProps, {updateHouses})(App);
