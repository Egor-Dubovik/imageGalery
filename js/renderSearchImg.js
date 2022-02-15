const searchForm = document.querySelector('.header__search-form ');
const searchInput = document.querySelector('.form__input');
const topicsGalary = document.querySelector('.topics__galary');
import { getSearch } from './getData.js';



export default function renderSearchImg() {
	searchForm.addEventListener('submit', e => {
		e.preventDefault();

		if (!searchInput.value) return;

		const content = document.createElement('div');
		content.classList.add('cotegory__content');

		getSearch(searchInput.value, 30, 'landscape')
			.then(data => {
				if (data.results.length) {
					data.results.forEach(el => {
						topicsGalary.textContent = '';

						const img = document.createElement('img');
						img.src = `${el.urls.regular}`;
						img.alt = `image`;

						const wraperImg = document.createElement('div');
						wraperImg.classList.add('cotegory__image');
						wraperImg.append(img);

						content.append(wraperImg);
					});
					topicsGalary.append(content);
				} else {
					topicsGalary.innerHTML = `<pre>Ничего не найдено (=\nВведите целое слово</pre>`;
				}
			})
	})

}

