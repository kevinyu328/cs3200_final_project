package com.example.springtemplate.services;

import com.example.springtemplate.models.Car;
import com.example.springtemplate.models.Lot;
import com.example.springtemplate.repositories.CarRepository;
import com.example.springtemplate.repositories.LotRepository;
import java.util.List;
import javax.persistence.criteria.CriteriaBuilder.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {

  @Autowired
  CarRepository carRepository;

  @Autowired
  LotRepository lotRepository;

  // findAllCars
  public List<Car> findAllCars() {
    return (List<Car>) carRepository.findAll();
  }

  // findCarById
  public Car findCarById(Integer id) {
    return carRepository.findById(id).get();
  }

  // findCarsForLot
  public List<Car> findCarsForLot(Integer lotId) {
    Lot lot = lotRepository.findById(lotId).get();
    return lot.getCars();
  }

  // findCarsForOwner???

  // create
  public Car createCar(Car car) {
    return carRepository.save(car);
  }

  // createCarForLot
  public Car createCarForLot(Integer lotId, Car car) {
    Lot lot = lotRepository.findById(lotId).get();
    car.setLot(lot);

    return carRepository.save(car);
  }

  // createCarForOwner???

  // update
  public Car updateCar(Integer id, Car updatedCar) {
    Car car = this.findCarById(id);
    car.setYear(updatedCar.getYear());
    car.setManufacturer(updatedCar.getManufacturer());
    car.setModel(updatedCar.getModel());
    car.setType(updatedCar.getType());
    car.setPrice(updatedCar.getPrice());

    return carRepository.save(car);
  }

  // delete
  public void deleteCar(Integer id) {
    carRepository.deleteById(id);
  }
}
