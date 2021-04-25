import ownerService from "./owner-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const OwnerEditorForm = () => {
  const [owner, setOwner] = useState({});
  const {ownerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    findOwnerById(ownerId)
  }, []);

  const findOwnerById = (id) =>
      ownerService.findOwnerById(id)
      .then(owner => setOwner(owner));

  const updateOwner = (id, newOwner) =>
      ownerService.updateOwner(id, newOwner)
      .then(() => history.goBack());

  const deleteOwner = (id) =>
      ownerService.deleteOwner(id)
      .then(() => history.goBack());

  return (
      <div>
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
        {/*<select*/}
        {/*    className="form-control margin-bottom-10px"*/}
        {/*    value={owner.username}*/}
        {/*    onChange={(e)=>setOwner(owner => ({...owner, username: e.target.value}))}>*/}
        {/*  <option>FALL</option>*/}
        {/*  <option>SPRING</option>*/}
        {/*  <option>SUMMER</option>*/}
        {/*</select>*/}
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


        <br/>
        <button
            onClick={() => updateOwner(owner.id, owner)}
            className="btn btn-success btn-block">Save</button>
        <button
            onClick={() => {
              history.goBack()
            }}
            className="btn btn-danger btn-block margin-left-10px">Cancel</button>
        <button
            onClick={() => deleteOwner(owner.id)}
            className="btn btn-danger btn-block margin-left-10px">Delete</button>
      </div>
  )
};

export default OwnerEditorForm
