package com.example.springtemplate.daos;

import com.example.springtemplate.models.Lot;
import com.example.springtemplate.models.Owner;
import com.example.springtemplate.services.LotService;
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
public class LotDao {

  @Autowired
  LotService lotService;

  @GetMapping("/api/lots")
  public List<Lot> findAllLots() {
    return lotService.findAllLots();
  }

  @GetMapping("/api/lots/{lotId}")
  public Lot findLotById(@PathVariable("lotId") Integer id) {
    return lotService.findLotById(id);
  }

  @GetMapping("/api/owners/{ownerId}/lots")
  public List<Lot> findLotsForOwner(@PathVariable("ownerId") Integer ownerId) {
    return lotService.findLotsForOwner(ownerId);
  }

  @PostMapping("api/lots")
  public Lot createLot(Lot lot) {
    return lotService.createLot(lot);
  }

  @PostMapping("/api/owners/{ownerId}/lots")
  public Lot createLotForOwner(@PathVariable("ownerId") Integer ownerId, @RequestBody Lot lot) {
    return lotService.createLotForOwner(ownerId, lot);
  }

  @PutMapping("/api/lots/{lotId}")
  public Lot updateLot(@PathVariable("lotId") Integer id, @RequestBody Lot updatedLot) {
    return lotService.updateLot(id, updatedLot);
  }

  @DeleteMapping("/api/lots/{lotId}")
  public void deleteLot(@PathVariable("lotId") Integer id) {
    lotService.deleteLot(id);
  }

}
