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
      carService.findAllCars()
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
          {
            cars.map(car =>
                <li key={car.id} className="list-group-item">
                  <Link to={`/lots/${lotId}/cars/${car.id}`}>
                    {`${car.year} ${car.manufacturer} ${car.model}`}
                  </Link>
                </li>)
          }
          <li>
            {
              lotId &&
              <Link to={lot.name ? `/lots/${lotId}/cars/create` : '/lots/create'}>
                <button className='create-btn btn btn-primary'>
                  {lot.name ? `Add car to ${lot.name}` : 'Add car'}
                </button>
              </Link>
            }
          </li>
        </ul>
      </div>
  )
};

export default CarList;
