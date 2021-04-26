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

  // const createOwner = (owner) =>
  //     ownerService.createOwner(owner)
  //     .then(owner => {
  //       // setNewOwner({title:''})
  //       setLots(owners => ([...owners, owner]))
  //     });
  //
  // const updateOwner = (id, newOwner) =>
  //     ownerService.updateOwner(id, newOwner)
  //     .then(owner => setLots(owners => (owners.map(owner => owner.id === id ? newOwner : owner))));
  //
  const findAllLots = () =>
      lotService.findAllLots()
      .then(lots => setLots(lots));

  const findLotForOwner = () =>
      lotService.findLotsForOwner(ownerId)
      .then(lots => setLots(lots));

  const findOwnerById = () =>
      ownerService.findOwnerById(ownerId)
      .then(owner => setOwner(owner));

  // const deleteOwner = (id) =>
  //     ownerService.deleteOwner(id)
  //     .then(owners => setLots(owners => owners.filter(owner => owner.id !== id)));

  return(
      <div>
        <h2>Lots</h2>
        <ul className="list-group">
          {/*<li className="list-group-item">*/}
          {/*  <div className="row">*/}
          {/*    <div className="col">*/}
          {/*      <input placeholder="Owner Name"*/}
          {/*             title="Please enter a name for the owner" className="form-control" value={newOwner.title}*/}
          {/*             onChange={(e) => setNewOwner(newOwner => ({...newOwner, title: e.target.value}))}/>*/}
          {/*    </div>*/}
          {/*    <div className="col-3">*/}
          {/*      <i className="fas fa-plus fa-2x float-right" onClick={() => createCourse(newCourse)}></i>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</li>*/}
          {
            lots.map(lot =>
                <li key={lot.id} className="list-group-item">
                  <Link to={`/owners/${ownerId}/lots/${lot.id}`}>
                    {`${lot.name}`}
                  </Link>
                  {/*<CourseEditorInline key={owner._id}*/}
                  {/*                    updateOwner={updateOwner}*/}
                  {/*                    deleteOwner={deleteOwner}*/}
                  {/*                    owner={owner}/>*/}
                </li>)
          }
          <li>
            <Link to={owner.firstName ? `/owners/${ownerId}/lots/create` : '/lots/create'}>
              <button className='create-btn btn btn-primary'>
                {owner.firstName ?
                `Add Lot for ${owner.firstName} ${owner.lastName}` : 'Add lot'}
              </button>
            </Link>
          </li>
        </ul>
      </div>
  )
};

export default LotList;
