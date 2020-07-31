var cities = ['Ahvaz', 'Shiraz', 'Isfahan', 'Tehran']
var listCities = document.getElementById('list-cities')
var btnClearItems = document.getElementById('btn-clear-items')

function renderCities() {
	listCities.innerHTML = ''
	for (var i = 0; i < cities.length; i++) {
		listCities.innerHTML +=
			'<li class="list-group-item d-flex justify-content-between align-items-center">' +
			cities[i] +
			'<div>' +
			'<a target="_blank" href="https://www.google.com/maps/search/' +
			cities[i] +
			',+Iran" class="badge badge-info mr-2"><ion-icon name="map-outline"></ion-icon></a>' +
			'<button class="badge badge-warning mr-2" onclick="editCity(' +
			i +
			')"><ion-icon name="create-outline"></ion-icon></button>' +
			'<button class="badge badge-danger" onclick="deleteCity(' +
			i +
			')"><ion-icon name="trash-outline"></ion-icon></button>' +
			'</div>' +
			'</li>'
	}
}

function addCity() {
	var city = document.getElementById('city')

	if (city.value.trim() == '') {
		return alert('Please enter a city.')
	}

	if (cities.includes(city.value)) {
		alert('This city of ' + city.value + ' has already been added.')
		return (city.value = '')
	}

	cities.push(city.value)
	city.value = ''

	isEmpty()
	renderCities()
}

function deleteCity(index) {
	var city = cities[index]
	var isDelete = confirm('Are you sure about delete ' + city + '?')

	if (isDelete === true) {
		cities.splice(index, 1)
		isEmpty()
		renderCities()
	}
}

function editCity(index) {
	var updateCity = prompt('Please enter new city.')

	if (updateCity == cities[index]) {
		return alert('This is the same as before.')
	}

	cities[index] = updateCity
	isEmpty()
	renderCities()
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
