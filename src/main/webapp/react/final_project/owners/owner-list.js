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
        // setNewOwner({title:''})
        setOwners(owners => ([...owners, owner]))
      });

  const updateOwner = (id, newOwner) =>
      ownerService.updateOwner(id, newOwner)
      .then(owner => setOwners(owners => (owners.map(owner => owner.id === id ? newOwner : owner))));

  const findAllOwners = () =>
      // window.alert('hi');
      ownerService.findAllOwners()
      // fetch(OWNER_URL)
      // .then(response => response.json())
      .then(owners => setOwners(owners));

  const deleteOwner = (id) =>
      ownerService.deleteOwner(id)
      .then(owners => setOwners(owners => owners.filter(owner => owner.id !== id)));

  return(
      <div>

        <h2>Owners</h2>
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
            owners.map(owner =>
                <li key={owner.id} className="list-group-item">
                  <Link to={`/owners/${owner.id}`}>
                    {`${owner.firstName} ${owner.lastName}`}
                  </Link>
                  {/*<CourseEditorInline key={owner._id}*/}
                  {/*                    updateOwner={updateOwner}*/}
                  {/*                    deleteOwner={deleteOwner}*/}
                  {/*                    owner={owner}/>*/}
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
