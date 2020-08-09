const cities = ['Ahvaz', 'Shiraz', 'Isfahan', 'Tehran'];

let listCities = document.getElementById('list-cities');
let btnClearItems = document.getElementById('btn-clear-items');

const renderCities = () => {
  listCities.innerHTML = '';
  for (var i = 0; i < citiesLength(); i++) {
    console.log(i);
    console.log(cities[i]);
    listCities.innerHTML += `<li class="Box-row d-flex flex-items-center flex-justify-between">${cities[i]}<div><a target="_blank" href="https://www.google.com/maps/search/${cities[i]},+Iran" class="btn btn-sm mr-2"><i class="fas fa-map"></i></a><button class="btn btn-sm btn-outline mr-2" onclick="editCity(${i})"><i class="fas fa-edit"></i></button><button class="btn btn-sm btn-danger" onclick="deleteCity(${i})"><i class="fas fa-trash"></i></button></div></li>`;
  }
};

const citiesLength = () => cities.length;

const addCity = () => {
  let city = document.getElementById('city');

  if (city.value.trim() == '') {
    return Swal.fire({
      icon: 'warning',
      html: 'Please enter a city.',
      focusConfirm: false,
      confirmButtonText: 'Ok'
    });
  }

  if (cities.includes(city.value)) {
    Swal.fire({
      icon: 'error',
      html: `${city.value} has aleready been added.
        <div>Please enter another city.</div>`,
      focusConfirm: false,
      confirmButtonText: 'Ok'
    });
    return (city.value = '');
  }

  cities.push(city.value);
  city.value = '';

  isEmpty();
  renderCities();
};

const deleteCity = index => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(result => {
    if (result.value) {
      cities.splice(index, 1);
      Swal.fire('Deleted!', 'This city from list has been deleted.', 'success');
      isEmpty();
      renderCities();
    }
  });
};

const editCity = index => {
  Swal.fire({
    title: 'You can edit.',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Edit'
  }).then(editedCity => {
    if (editedCity.dismiss == 'cancel') return (cities[index] = cities[index]);
    if (editedCity.value == '')
      return Swal.fire('Warning!', 'Please enter a city.', 'warning');
    if (cities.includes(editedCity.value))
      return Swal.fire('Warning!', 'This is the same as before.', 'warning');

    cities[index] = editedCity.value;
    Swal.fire('Edited!', 'The previous city was edited.', 'success');

    isEmpty();
    renderCities();
  });
};

const clearItems = () => {
  cities.splice(0, citiesLength());
  btnClearItems.innerText = '';
  renderCities();
};

const isEmpty = () => {
  if (citiesLength() > 0) btnClearItems.innerText = 'Clear items';
  else btnClearItems.innerText = '';
};

renderCities();
