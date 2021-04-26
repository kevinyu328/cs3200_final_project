import carService from "./car-service"
import lotService from "../lots/lot-service";

const {Link, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [lot, setLot] = useState({});
  const {lotId} = useParams();

  useEffect(() => {
    lotId ? findCarForLot(lotId) : findAllCars();
    findLotById();
  }, []);

  const findAllCars = () =>
      // window.alert('hi');
      carService.findAllCars()
      // fetch(OWNER_URL)
      // .then(response => response.json())
      .then(cars => setCars(cars));

  const findCarForLot = () =>
      carService.findCarsForLot(lotId)
      .then(lots => setCars(lots));

  const findLotById = () =>
      lotService.findLotById(lotId)
      .then(lot => setLot(lot));

  return(
      <div>
        <div>
          <Link to={'/'}>
            Home
          </Link>
        </div>
        <h2>Cars</h2>
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
            cars.map(car =>
                <li key={car.id} className="list-group-item">
                  <Link to={`/lots/${lotId}/cars/${car.id}`}>
                    {`${car.year} ${car.manufacturer} ${car.model}`}
                  </Link>
                  {/*<CourseEditorInline key={owner._id}*/}
                  {/*                    updateOwner={updateOwner}*/}
                  {/*                    deleteOwner={deleteOwner}*/}
                  {/*                    owner={owner}/>*/}
                </li>)
          }
          <li>
            <Link to={lot.name ? `/lots/${lotId}/cars/create` : '/lots/create'}>
              <button className='create-btn btn btn-primary'>
                {lot.name ? `Add car to ${lot.name}` : 'Add car'}
              </button>
            </Link>
          </li>
        </ul>
      </div>
  )
};

export default CarList;
