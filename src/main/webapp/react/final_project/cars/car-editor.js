import carService from "./car-service"
import lotService from "../lots/lot-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const CarEditorForm = () => {
  const [car, setCar] = useState({});
  const [carCopy, setCarCopy] = useState({});
  const [lot, setLot] = useState({});
  const {lotId, carId} = useParams();
  const history = useHistory();

  useEffect(() => {
    findCarById(carId);
    findLotById()
  }, []);

  const findCarById = (id) =>
      carService.findCarById(id)
      .then(car => {
        setCar(car);
        setCarCopy(car);
      });

  const updateCar = (id, newCar) =>
      carService.updateCar(id, newCar)
      .then(() => history.goBack());

  const deleteCar = (id) =>
      carService.deleteCar(id)
      .then(() => history.goBack());

  const createCarForLot = (lotId, lot) =>
      carService.createCarForLot(lotId, lot)
      .then(() => history.goBack());

  const findLotById = () =>
      lotService.findLotById(lotId)
      .then(lot => setLot(lot));



  return (
      <div>
        <h2>
          Car Editor
        </h2>
        <label>Id</label>
        <input
            className="form-control margin-bottom-10px"
            readOnly={true}
            value={car.id}/>
        <label>Year</label>
        <input
            type='number'
            className="form-control margin-bottom-10px"
            onChange={(e) => setCar(car => ({...car, year: parseInt(e.target.value)}))}
            value={car.year}/>
        <label>Manufacturer</label>
        <input
            className="form-control margin-bottom-10px"
            value={car.manufacturer}
            onChange={(e)=>setCar(lot => ({...car, manufacturer: e.target.value}))}/>
        {/*<select*/}
        {/*    className="form-control margin-bottom-10px"*/}
        {/*    value={owner.username}*/}
        {/*    onChange={(e)=>setOwner(owner => ({...owner, username: e.target.value}))}>*/}
        {/*  <option>FALL</option>*/}
        {/*  <option>SPRING</option>*/}
        {/*  <option>SUMMER</option>*/}
        {/*</select>*/}
        <label>Model</label>
        <input
            className="form-control margin-bottom-10px"
            value={car.model}
            onChange={(e)=>setCar(car => ({...car, model: e.target.value}))}/>
        <label>Type</label>
        <select
            className="form-control margin-bottom-10px"
            value={car.type}
            onChange={(e)=>setCar(car => ({...car, type: e.target.value}))}>
          <option value='SEDAN'>SEDAN</option>
          <option value='SUV'>SUV</option>
          <option value='PICKUP'>PICKUP</option>
          <option value='HATCHBACK'>HATCHBACK</option>
        </select>
        <label>Price</label>
        <input
            type='number'
            className="form-control margin-bottom-10px"
            value={car.price}
            onChange={(e)=>setCar(car => ({...car, price: parseInt(e.target.value)}))}/>

        <button
            onClick={carCopy.year ? () => updateCar(car.id, car) : () => createCarForLot(lotId, car)}
            className="btn btn-success btn-block">Save</button>
        <button
            onClick={() => {
              history.goBack()
            }}
            className="btn btn-danger btn-block margin-left-10px">Cancel</button>
        <button
            onClick={() => deleteCar(car.id)}
            className="btn btn-danger btn-block margin-left-10px">Delete</button>

        <br/>
        <br/>
        <div>
          {
            carCopy.year &&
            <Link to={`/lots/${lot.id}/cars`}>
              Click here to view cars in {lot.name}.
            </Link>
          }
        </div>

      </div>

  )
};

export default CarEditorForm
