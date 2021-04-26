import ownerService from "./owner-service"
import Home from "../home-component"

const {Link} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const OwnerList = () => {
  const [owners, setOwners] = useState([]);
  const [newOwner, setNewOwner] = useState({});

  useEffect(() => {
    findAllOwners()
  }, []);

  const createOwner = (owner) =>
      ownerService.createOwner(owner)
      .then(owner => {
        setOwners(owners => ([...owners, owner]))
      });

  const updateOwner = (id, newOwner) =>
      ownerService.updateOwner(id, newOwner)
      .then(owner => setOwners(owners => (owners.map(owner => owner.id === id ? newOwner : owner))));

  const findAllOwners = () =>
      ownerService.findAllOwners()
      .then(owners => setOwners(owners));

  const deleteOwner = (id) =>
      ownerService.deleteOwner(id)
      .then(owners => setOwners(owners => owners.filter(owner => owner.id !== id)));

  return(
      <div>

        <h2>Owners</h2>
        <ul className="list-group">
          {
            owners.map(owner =>
                <li key={owner.id} className="list-group-item">
                  <Link to={`/owners/${owner.id}`}>
                    {`${owner.firstName} ${owner.lastName}`}
                  </Link>
                </li>)
          }
          <li>
            <Link to={'/owners/create'}>
              <button className='create-btn btn btn-primary'>
                Add owner
              </button>
            </Link>
          </li>
        </ul>
      </div>
  )
};

export default OwnerList;
