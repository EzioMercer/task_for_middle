import {UPDATE_APARTMENT_FAVOURITE_STATUS, RECIEVE_LIST_OF_APARTMENTS} from './ApartmentsAction';

const INITIAL_STATE = [];

const listOfApartments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECIEVE_LIST_OF_APARTMENTS:
		case UPDATE_APARTMENT_FAVOURITE_STATUS:
			return [...action.payload];
		default:
			return state;
	}
};

export default listOfApartments;
