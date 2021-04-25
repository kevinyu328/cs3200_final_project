package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Lot;
import org.springframework.data.repository.CrudRepository;

public interface LotRepository extends CrudRepository<Lot, Integer> {

}
