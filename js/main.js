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
