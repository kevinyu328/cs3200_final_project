package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Integer> {

}
