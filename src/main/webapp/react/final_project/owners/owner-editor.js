import ownerService from "./owner-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const OwnerEditorForm = () => {
  const [owner, setOwner] = useState({});
  const [ownerCopy, setOwnerCopy] = useState({});
  const {ownerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    findOwnerById(ownerId)
  }, []);

  const findOwnerById = (id) =>
      ownerService.findOwnerById(id)
      .then(owner => {
        setOwner(owner);
        setOwnerCopy(owner);
      });

  const updateOwner = (id, newOwner) =>
      ownerService.updateOwner(id, newOwner)
      .then(() => history.goBack());

  const deleteOwner = (id) =>
      ownerService.deleteOwner(id)
      .then(() => history.goBack());

  const createOwner = (owner) =>
      ownerService.createOwner(owner)
      .then(() => history.goBack());

  return (
      <div>
        <div>
          <Link to={'/'}>
            Home
          </Link>
        </div>
        <h2>
          Owner Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control margin-bottom-10px"
            readOnly={true}
            value={owner.id}/>
        <label>First Name</label>
        <input
            className="form-control margin-bottom-10px"
            onChange={(e) => setOwner(owner => ({...owner, firstName: e.target.value}))}
            value={owner.firstName}/>
        <label>Last Name</label>
        <input
            className="form-control margin-bottom-10px"
            value={owner.lastName}
            onChange={(e)=>setOwner(owner => ({...owner, lastName: e.target.value}))}/>
        <label>Username</label>
        <input
            className="form-control margin-bottom-10px"
            value={owner.username}
            onChange={(e)=>setOwner(owner => ({...owner, username: e.target.value}))}/>
        <label>Password</label>
        <input
            className="form-control margin-bottom-10px"
            value={owner.password}
            onChange={(e)=>setOwner(owner => ({...owner, password: e.target.value}))}/>
        <label>Email</label>
        <input
            className="form-control margin-bottom-10px"
            value={owner.email}
            onChange={(e)=>setOwner(owner => ({...owner, email: e.target.value}))}/>
        <label>Date of Birth</label>
        <input
            type="date"
            className="form-control margin-bottom-10px"
            value={(owner.dateOfBirth)}
            onChange={(e)=>setOwner(owner => ({...owner, dateOfBirth: e.target.value}))}
        />


        <button
            onClick={ownerCopy.firstName ? () => updateOwner(owner.id, owner) : () => createOwner(owner)}
            className="btn btn-success btn-block">Save</button>
        <button
            onClick={() => {
              history.goBack()
            }}
            className="btn btn-danger btn-block margin-left-10px">Cancel</button>
        <button
            onClick={() => deleteOwner(owner.id)}
            className="btn btn-danger btn-block margin-left-10px">Delete</button>

        <br/>
        <br/>
        <div>
          {
            ownerCopy.firstName &&
            <Link to={`/owners/${owner.id}/lots`}>
              Click here to view {owner.firstName} {owner.lastName}'s owned lots.
            </Link>
          }
        </div>

      </div>

  )
};

export default OwnerEditorForm
