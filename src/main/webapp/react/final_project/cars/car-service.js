const CAR_URL = "http://localhost:8080/api/cars";
const LOT_URL = "http://localhost:8080/api/lots";

const findAllCars = () =>
    fetch(CAR_URL)
    .then(response => response.json());


const findCarById = (id) =>
    fetch(`${CAR_URL}/${id}`)
    .then(response => response.json());


const findCarsForLot = (lotId) =>
    fetch(`${LOT_URL}/${lotId}/cars`)
    .then(response => response.json());


const createCar = (car) =>
    fetch(CAR_URL, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


const createCarForLot = (lotId, car) =>
    fetch(`${LOT_URL}/${lotId}/cars`, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


const updateCar = (id, car) =>
    fetch(`${CAR_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(car),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


const deleteCar = (id) =>
    fetch(`${CAR_URL}/${id}`, {
      method: "DELETE"
    });

export default {
  createCar,
  findAllCars,
  findCarById,
  updateCar,
  deleteCar,
  findCarsForLot,
  createCarForLot
}
