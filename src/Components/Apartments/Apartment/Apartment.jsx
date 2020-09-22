import React from 'react';
import style from './ApartmentStyle.module.scss';

export default function Apartment(props) {
	const apartment = props.apartment;
	const apartmentAttributes = apartment.attributes;
	const apartmentRelationships = apartment.relationships.attributes;
	const apartmentAddress = apartmentAttributes.address;
	const apartmentType = {
		flat: 'Квартира'
	};

	return (
		<li className={style.apartment_card}>
			<div className={style.apartment_card_header}>
				<p>{apartmentAttributes.title}</p>
				<label htmlFor={apartment.id}>Избранное</label>
				<input type="checkbox" id={apartment.id} onChange={props.updateStatus} checked={apartment.isFavourite}/>
			</div>
			<div className={style.apartment_card_body}>
				<br/>
				<div>Харакатеристики:</div>
				<p><span>Тип: </span>{apartmentType[apartment.type]}</p>
				<p><span>Количество комнат: </span>{apartmentAttributes.rooms}</p>
				<p><span>Площадь: </span>{apartmentAttributes.area} {apartmentAttributes.unit}</p>
				<br/>
				<div>Месторасположение:</div>
				<p><span>Город: </span>{apartmentAddress.city}</p>
				<p><span>Улица: </span>{apartmentAddress.street}</p>
				<p><span>Дом: </span>{apartmentAddress.house}</p>
				<p><span>Квартира: </span>{apartmentAddress.room}</p>
			</div>
			<hr/>
			<div className={style.apartment_card_footer}>
				<p><span>Риелтор: </span>{apartmentRelationships.last_name} {apartmentRelationships.first_name} {apartmentRelationships.middle_name}</p>
			</div>
		</li>
	);
};