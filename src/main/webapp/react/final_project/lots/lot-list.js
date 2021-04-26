import lotService from "./lot-service"
import ownerService from "../owners/owner-service"

const {Link, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const LotList = () => {
  const [lots, setLots] = useState([]);
  const [owner, setOwner] = useState([]);
  const [newOwner, setNewOwner] = useState({});
  const {ownerId} = useParams();

  useEffect(() => {
    ownerId ? findLotForOwner() : findAllLots();
    findOwnerById()
  }, []);

  const findAllLots = () =>
      lotService.findAllLots()
      .then(lots => setLots(lots));

  const findLotForOwner = () =>
      lotService.findLotsForOwner(ownerId)
      .then(lots => setLots(lots));

  const findOwnerById = () =>
      ownerService.findOwnerById(ownerId)
      .then(owner => setOwner(owner));


  return(
      <div>
        <div>
          <Link to={'/'}>
            Home
          </Link>
        </div>
        <h2>Lots</h2>
        <ul className="list-group">
          {
            lots.map(lot =>
                <li key={lot.id} className="list-group-item">
                  <Link to={`/owners/${ownerId}/lots/${lot.id}`}>
                    {`${lot.name}`}
                  </Link>
                </li>)
          }
          <li>
            {
              owner.firstName &&
              <Link to={owner.firstName ? `/owners/${ownerId}/lots/create` : '/lots/create'}>
                <button className='create-btn btn btn-primary'>
                  {owner.firstName ?
                      `Add Lot for ${owner.firstName} ${owner.lastName}` : 'Add lot'}
                </button>
              </Link>
            }

          </li>
        </ul>
      </div>
  )
};

export default LotList;
