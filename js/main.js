var cities = ['Ahvaz', 'Shiraz', 'Isfahan', 'Tehran']
var listCities = document.getElementById('list-cities')
var btnClearItems = document.getElementById('btn-clear-items')

function renderCities() {
	listCities.innerHTML = ''
	for (var i = 0; i < cities.length; i++) {
		listCities.innerHTML +=
			'<li class="Box-row d-flex flex-items-center flex-justify-between">' +
			cities[i] +
			'<div>' +
			'<a target="_blank" href="https://www.google.com/maps/search/' +
			cities[i] +
			',+Iran" class="btn btn-sm mr-2"><i class="fas fa-map"></i></a>' +
			'<button class="btn btn-sm btn-outline mr-2" onclick="editCity(' +
			i +
			')"><i class="fas fa-edit"></i></button>' +
			'<button class="btn btn-sm btn-danger" onclick="deleteCity(' +
			i +
			')"><i class="fas fa-trash"></i></button>' +
			'</div>' +
			'</li>'
	}
}

function addCity() {
	var city = document.getElementById('city')

	if (city.value.trim() == '') {
		return Swal.fire({
			icon: 'warning',
			html: 'Please enter a city.',
			focusConfirm: false,
			confirmButtonText: 'Ok',
		})
	}

	if (cities.includes(city.value)) {
		Swal.fire({
			icon: 'error',
			html:
				city.value +
				' has already been added.' +
				'<div>Please enter another city.</div>',
			focusConfirm: false,
			confirmButtonText: 'Ok',
		})
		return (city.value = '')
	}

	cities.push(city.value)
	city.value = ''

	isEmpty()
	renderCities()
}

function deleteCity(index) {
	var city = cities[index]

	Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!',
	}).then((result) => {
		if (result.value) {
			cities.splice(index, 1)
			Swal.fire(
				'Deleted!',
				'This city from list has been deleted.',
				'success'
			)

			isEmpty()
			renderCities()
		}
	})
}

function editCity(index) {
	Swal.fire({
		title: 'You can edit.',
		input: 'text',
		inputAttributes: {
			autocapitalize: 'off',
		},
		showCancelButton: true,
		confirmButtonText: 'Edit',
	}).then((updateCity) => {
		if (cities.includes(updateCity.value)) {
			return Swal.fire(
				'Warning!',
				'This is the same as before.',
				'warning'
			)
		}

		cities[index] = updateCity.value
		Swal.fire('Edited!', 'The previous city was edited.', 'success')

		isEmpty()
		renderCities()
	})
}

function clearItems() {
	cities.splice(0, cities.length)
	btnClearItems.innerHTML = ''

	renderCities()
}

function isEmpty() {
	if (cities.length > 0) {
		btnClearItems.innerHTML = 'Clear items'
	} else {
		btnClearItems.innerHTML = ''
	}
}

renderCities()
