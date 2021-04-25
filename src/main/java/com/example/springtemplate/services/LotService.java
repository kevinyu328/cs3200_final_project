package com.example.springtemplate.services;

import com.example.springtemplate.models.Lot;
import com.example.springtemplate.models.Owner;
import com.example.springtemplate.repositories.LotRepository;
import com.example.springtemplate.repositories.OwnerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LotService {

  @Autowired
  LotRepository lotRepository;

  @Autowired
  OwnerRepository ownerRepository;

  // findAllLots
  public List<Lot> findAllLots() {
    return (List<Lot>) lotRepository.findAll();
  }

  // findLotById
  public Lot findLotById(Integer id) {
    return lotRepository.findById(id).get();
  }

  // findLotsForOwner
  public List<Lot> findLotsForOwner(Integer ownerId) {
    Owner owner = ownerRepository.findById(ownerId).get();
    return owner.getOwnedLots();
  }

  // create
  public Lot createLot(Lot lot) {
    return lotRepository.save(lot);
  }

  // createLotForOwner
  public Lot createLotForOwner(Integer ownerId, Lot lot) {
    Owner owner = ownerRepository.findById(ownerId).get();
    lot.setOwner(owner);
    return lotRepository.save(lot);
  }

  // update
  public Lot updateLot(Integer id, Lot updatedLot) {
    Lot lot = this.findLotById(id);
    lot.setName(updatedLot.getName());
    lot.setLocation(updatedLot.getLocation());
    lot.setRevenue(updatedLot.getRevenue());
    return lotRepository.save(lot);
  }

  // delete
  public void deleteLot(Integer id) {
    lotRepository.deleteById(id);
  }

}
