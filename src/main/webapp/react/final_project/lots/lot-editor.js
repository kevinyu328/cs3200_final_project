import lotService from "./lot-service"
import ownerService from "../owners/owner-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const LotEditorForm = () => {
  const [lot, setLot] = useState({});
  const [lotCopy, setLotCopy] = useState({});
  const [owners, setOwners] = useState({});
  const {lotId, ownerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    findLotById(lotId);
    findAllOwners();
  }, []);

  const findLotById = (id) =>
      lotService.findLotById(id)
      .then(lot => {
        setLot(lot);
        setLotCopy(lot);
      });

  const updateLot = (id, newLot) =>
      lotService.updateLot(id, newLot)
      .then(() => history.goBack());

  const deleteLot = (id) =>
      lotService.deleteLot(id)
      .then(() => history.goBack());

  const createLotForOwner = (ownerId, lot) =>
      lotService.createLotForOwner(ownerId, lot)
      .then(() => history.goBack());

  const findAllOwners = () =>
      ownerService.findAllOwners()
      .then(owners => setOwners(owners));


  return (
      <div>
        <div>
          <Link to={'/'}>
            Home
          </Link>
        </div>
        <h2>
          Lot Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control margin-bottom-10px"
            readOnly={true}
            value={lot.id}/>
        <label>Name</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setLot(lot => ({...lot, name: e.target.value}))}
            value={lot.name}/>
        <label>Location</label>
        <input
            className="form-control margin-bottom-10px"
            value={lot.location}
            onChange={(e)=>setLot(lot => ({...lot, location: e.target.value}))}/>
        {/*<select*/}
        {/*    className="form-control margin-bottom-10px"*/}
        {/*    value={owner.username}*/}
        {/*    onChange={(e)=>setOwner(owner => ({...owner, username: e.target.value}))}>*/}
        {/*  <option>FALL</option>*/}
        {/*  <option>SPRING</option>*/}
        {/*  <option>SUMMER</option>*/}
        {/*</select>*/}
        <label>Revenue</label>
        <input
            type='number'
            className="form-control margin-bottom-10px"
            value={lot.revenue}
            onChange={(e)=>setLot(lot => ({...lot, revenue: parseInt(e.target.value)}))}/>
        {/*<label>Owner</label>*/}
        {/*<select*/}
        {/*    className="form-control margin-bottom-10px"*/}
        {/*    value={lot.owner}*/}
        {/*    onChange={(e)=>setLot(lot => ({...lot, owner: e.target.value}))}>*/}
        {/*  {*/}
        {/*    owners.map(owner =>*/}
        {/*        <option>{owner.firstName}</option>)*/}
        {/*  }*/}
        {/*/!*  /!*<option>FALL</option>*!/*!/*/}
        {/*/!*  /!*<option>SPRING</option>*!/*!/*/}
        {/*/!*  /!*<option>SUMMER</option>*!/*!/*/}
        {/*</select>*/}
        {/*<label>Owner</label>*/}
        {/*<input*/}
        {/*    className="form-control margin-bottom-10px"*/}
        {/*    value={lot.cars}*/}
        {/*    onChange={(e)=>setLot(lot => ({...lot, owner: e.target.value}))}/>*/}

        <button
            onClick={lotCopy.name ? () => updateLot(lot.id, lot) : () => createLotForOwner(ownerId, lot)}
            className="btn btn-success btn-block">Save</button>
        <button
            onClick={() => {
              history.goBack()
            }}
            className="btn btn-danger btn-block margin-left-10px">Cancel</button>
        <button
            onClick={() => deleteLot(lot.id)}
            className="btn btn-danger btn-block margin-left-10px">Delete</button>

        <br/>
        <br/>
        <div>
          {
            lotCopy.name &&
            <Link to={`/lots/${lot.id}/cars`}>
              Click here to view cars in {lot.name}.
            </Link>
          }
        </div>

      </div>

  )
};

export default LotEditorForm
