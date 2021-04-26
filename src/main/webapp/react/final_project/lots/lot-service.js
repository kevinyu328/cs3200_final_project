const LOT_URL = "http://localhost:8080/api/lots";
const OWNER_URL = "http://localhost:8080/api/owners";


export const createLot = (lot) =>
    fetch(LOT_URL, {
      method: 'POST',
      body: JSON.stringify(lot),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


export const findAllLots = () =>
    fetch(LOT_URL)
    .then(response => response.json());


export const findLotById = (id) =>
    fetch(`${LOT_URL}/${id}`)
    .then(response => response.json());


export const updateLot = (id, lot) =>
    fetch(`${LOT_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(lot),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


const deleteLot = (id) =>
    fetch(`${LOT_URL}/${id}`, {
      method: "DELETE"
    });


const findLotsForOwner = (ownerId) =>
  fetch(`${OWNER_URL}/${ownerId}/lots`)
  .then(response => response.json());


const createLotForOwner = (ownerId, lot) =>
    fetch(`${OWNER_URL}/${ownerId}/lots`, {
      method: 'POST',
      body: JSON.stringify(lot),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());


export default {
  createLot,
  findAllLots,
  findLotById,
  updateLot,
  deleteLot,
  findLotsForOwner,
  createLotForOwner
}
