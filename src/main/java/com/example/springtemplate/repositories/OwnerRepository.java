package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Owner;
import org.springframework.data.repository.CrudRepository;

public interface OwnerRepository extends CrudRepository<Owner, Integer> {

}
