package com.example.springtemplate.services;

import com.example.springtemplate.models.Owner;
import com.example.springtemplate.repositories.OwnerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OwnerService {

  @Autowired
  OwnerRepository ownerRepository;

  // findAllOwners
  public List<Owner> findAllOwners() {
    return (List<Owner>) ownerRepository.findAll();
  }

  // findOwnerById
  public Owner findOwnerById(Integer id) {
    return ownerRepository.findById(id).get();
  }

  // create
  public Owner createOwner(Owner owner) {
    return ownerRepository.save(owner);
  }

  // update
  public Owner updateOwner(Integer id, Owner updatedOwner) {
    Owner owner = this.findOwnerById(id);
    owner.setFirstName(updatedOwner.getFirstName());
    owner.setLastName(updatedOwner.getLastName());
    owner.setUsername(updatedOwner.getUsername());
    owner.setPassword(updatedOwner.getPassword());
    owner.setEmail(updatedOwner.getEmail());
    owner.setDateOfBirth(updatedOwner.getDateOfBirth());

    return ownerRepository.save(owner);
  }

  // delete
  public void deleteOwner(Integer id) {
    ownerRepository.deleteById(id);
  }

}
