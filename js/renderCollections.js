const topicsGalary = document.querySelector('.topics__galary');
const topicsCotegory = document.querySelector('.topics__cotegory');


import { getTopic } from './getData.js';


export default async function renderCollections() {
	const data = await getTopic();

	data.forEach(el => {
		const title = `<h2 class="cotegory__title">${el.title}</h2>`
		const content = document.createElement('div');
		content.classList.add('cotegory__content');
		const cotegotyItem = document.createElement('div');
		cotegotyItem.classList.add('cotegory__item');

		el.preview_photos.forEach(ph => {
			console.log(ph)
			const img = document.createElement('img');
			img.src = `${ph.urls.regular}`;
			img.alt = `image`;

			const wraperImg = document.createElement('div');
			wraperImg.classList.add('cotegory__image');

			wraperImg.append(img);
			content.append(wraperImg);
		})

		cotegotyItem.insertAdjacentHTML('afterbegin', title);
		cotegotyItem.append(content);
		topicsCotegory.append(cotegotyItem);
		console.log(el)

	});
}