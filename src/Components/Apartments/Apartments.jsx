import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getListOfApartments, updateApartmentFavouriteStatus} from '../../Redux/Apartments/ApartmentsAction';
import Apartment from './Apartment/Apartment';
import style from './ApartmentsStyle.module.scss';

export default function Apartments() {

	const dispatch = useDispatch();
	const listOfApartments = useSelector(state => state.listOfApartments);

	const changeApartmentFavouriteStatus = apartment => {
		apartment.isFavourite = !apartment.isFavourite;
		dispatch(updateApartmentFavouriteStatus(listOfApartments));
	};

	useEffect(() => {
		dispatch(getListOfApartments());
	}, []);

	return (
		<ul className={style.apartments}>
			{listOfApartments.map(apartment => <Apartment apartment={apartment} updateStatus={() => changeApartmentFavouriteStatus(apartment)}/>)}
		</ul>
	)
}