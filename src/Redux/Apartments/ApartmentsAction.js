import {useDispatch} from 'react-redux';

export const RECIEVE_LIST_OF_APARTMENTS = 'RECIEVE_LIST_OF_APARTMENTS';
export const UPDATE_APARTMENT_FAVOURITE_STATUS = 'UPDATE_APARTMENT_FAVOURITE_STATUS';

const reciveListOfApartments = listOfApartments => ({
	type: RECIEVE_LIST_OF_APARTMENTS,
	payload: listOfApartments
});

export const getListOfApartments = () => (dispatch = useDispatch()) => {
	(async () => {
		try{
			let response = await fetch('entities.json');

			if(response.ok) {
				let data = await response.json();

				dispatch(reciveListOfApartments(data.response));
			} else {
				console.log('HTTP Error: ' + response.status);
			}

		} catch (e) {
			console.log(e);
		}
	})();
};

export const updateApartmentFavouriteStatus = listOfApartments => ({
	type: UPDATE_APARTMENT_FAVOURITE_STATUS,
	payload: listOfApartments
});