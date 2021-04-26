const OWNER_URL = "http://localhost:8080/api/owners";

export const createOwner = (owner) =>
    fetch(OWNER_URL, {
      method: 'POST',
      body: JSON.stringify(owner),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());

export const findAllOwners = () =>
    fetch(OWNER_URL)
    .then(response => response.json());

export const findOwnerById = (id) =>
    fetch(`${OWNER_URL}/${id}`)
    .then(response => response.json());

export const updateOwner = (id, owner) =>
    fetch(`${OWNER_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(owner),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json());

const deleteOwner = (id) =>
    fetch(`${OWNER_URL}/${id}`, {
      method: "DELETE"
    });

export default {
  createOwner,
  findAllOwners,
  findOwnerById,
  updateOwner,
  deleteOwner
}
