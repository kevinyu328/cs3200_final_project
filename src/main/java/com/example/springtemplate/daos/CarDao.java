package com.example.springtemplate.daos;

import com.example.springtemplate.models.Car;
import com.example.springtemplate.models.Lot;
import com.example.springtemplate.services.CarService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CarDao {

  @Autowired
  CarService carService;

  @GetMapping("/api/cars")
  public List<Car> findAllCars() {
    return carService.findAllCars();
  }

  @GetMapping("/api/cars/{carId}")
  public Car findCarById(@PathVariable("carId") Integer id) {
    return carService.findCarById(id);
  }

  @GetMapping("/api/lots/{lotId}/cars")
  public List<Car> findCarsForLot(@PathVariable("lotId") Integer lotId) {
    return carService.findCarsForLot(lotId);
  }

  @PostMapping("/api/cars")
  public Car createCar(@RequestBody Car car) {
    return carService.createCar(car);
  }

  @PostMapping("/api/lots/{lotId}/cars")
  public Car createCarForLot(@PathVariable("lotId") Integer lotId, @RequestBody Car car) {
    return carService.createCarForLot(lotId, car);
  }

  @PutMapping("/api/cars/{carId}")
  public Car updateCar(@PathVariable("carId") Integer id, @RequestBody Car updatedCar) {
    return carService.updateCar(id, updatedCar);
  }

  @DeleteMapping("/api/cars/{carId}")
  public void deleteCar(@PathVariable("carId") Integer id) {
    carService.deleteCar(id);
  }
}
