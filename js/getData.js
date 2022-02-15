const BASE_URL = 'https://api.unsplash.com/';

import API_KEY from './apiKey.js';
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


const getData = (url) => {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw `Worning ${response.status}`;
		})

}



export const getTopic = async () => {
	const url = `${BASE_URL}collections/?client_id=${API_KEY}`;
	return await getData(url);
}

export const getSearch = async (query, page, oriented) => {
	const url = `${BASE_URL}search/photos?per_page=${page}&query=${query}&orientation=${oriented}&client_id=${API_KEY}`;
	return await getData(url);
}


