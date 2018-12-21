const initialState = {
	houses: [],
	name: '',
	address: '',
	city: '',
	state: '',
	zip: null,
	image: '',
	mortgage: '',
	rent: '',
}

const UPDATE_HOUSES = "UPDATE_HOUSES"
const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"
const UPDATE_IMAGE = "UPDATE_IMAGE"
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
const UPDATE_RENT = "UPDATE_RENT"

export const updateHouses = (houses) => {
	return {
		type: UPDATE_HOUSES,
		payload: houses
	}
}
export const updateName = (name) => {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}
export const updateAddress = (address) => {
	return {
		type: UPDATE_ADDRESS,
		payload: address
	}
}
export const updateCity = (city) => {
	return {
		type: UPDATE_CITY,
		payload: city
	}
}
export const updateState = (state) => {
	return {
		type: UPDATE_STATE,
		payload: state
	}
}
export const updateZip = (zip) => {
	return {
		type: UPDATE_ZIP,
		payload: zip
	}
}
export const updateImage = (image) => {
	return {
		type: UPDATE_IMAGE,
		payload: image
	}
}
export const updateMortgage = (mortgage) => {
	return {
		type: UPDATE_MORTGAGE,
		payload: mortgage
	}
}
export const updateRent = (rent) => {
	return {
		type: UPDATE_RENT,
		payload: rent
	}
}

function reducer(state = initialState, action){
	switch (action.type) {
		case UPDATE_HOUSES:
		return {
			...state,
			houses: action.payload
		};
		case UPDATE_NAME:
		return {
			...state,
			name: action.payload
		};
		case UPDATE_ADDRESS:
		return {
			...state,
			address: action.payload
		};
		case UPDATE_CITY:
		return {
			...state,
			city: action.payload
		};
		case UPDATE_STATE:
		return {
			...state,
			state: action.payload
		};
		case UPDATE_ZIP:
		return {
			...state,
			zip: action.payload
		};
		case UPDATE_IMAGE:
		return {
			...state,
			image: action.payload
		};
		case UPDATE_MORTGAGE:
		return {
			...state,
			mortgage: action.payload
		};
		case UPDATE_RENT:
		return {
			...state,
			rent: action.payload
		};
		default:
		return state
	}
}

export default reducer;