package com.example.springtemplate.daos;

import com.example.springtemplate.models.Owner;
import com.example.springtemplate.repositories.OwnerRepository;
import com.example.springtemplate.services.OwnerService;
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
public class OwnerDao {

  @Autowired
  OwnerService ownerService;

  @GetMapping("/api/owners")
  public List<Owner> findAllOwners() {
    return ownerService.findAllOwners();
  }

  @GetMapping("/api/owners/{ownerId}")
  public Owner findOwnerById(@PathVariable("ownerId") Integer id) {
    return ownerService.findOwnerById(id);
  }

  @PostMapping("/api/owners")
  public Owner createOwner(@RequestBody Owner owner) {
    return ownerService.createOwner(owner);
  }

  @PutMapping("/api/owners/{ownerId}")
  public Owner updateOwner(@PathVariable("ownerId") Integer id, @RequestBody Owner updatedOwner) {
    return ownerService.updateOwner(id, updatedOwner);
  }

  @DeleteMapping("/api/owners/{ownerId}")
  public void deleteOwner(@PathVariable("ownerId") Integer id) {
    ownerService.deleteOwner(id);
  }
}
