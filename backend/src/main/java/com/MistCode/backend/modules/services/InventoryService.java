package com.MistCode.backend.modules.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.MistCode.backend.core.entities.InventoryEntity;
import com.MistCode.backend.core.repositories.InventoryRepository;

@Service
public class InventoryService {

    private HashMap<String, Object> datos;
    private final InventoryRepository InventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository InventoryRepository) {
        this.InventoryRepository = InventoryRepository;
    }

    public List<InventoryEntity> getInventorys() {
        return this.InventoryRepository.findAll();
    }

    public ResponseEntity<Object> newInventory(InventoryEntity Inventory) {
        Optional<InventoryEntity> res = InventoryRepository.findInventoryByCard(Inventory.getCard());
        datos = new HashMap<>();
        if (res.isPresent()) {
            datos.put("error", true);
            datos.put("messsage", "Este ya está we");
            return new ResponseEntity<>(
                    datos,
                    HttpStatus.CONFLICT
            );
        }
        InventoryRepository.save(Inventory);
        datos.put("data", Inventory);
        datos.put("messsage", "Este sí :)");
        return new ResponseEntity<>(
                datos,
                HttpStatus.CREATED
        );
    }

    public ResponseEntity<Object> DelInventory(Long id) {
        boolean exist = this.InventoryRepository.existsById(id);
        datos = new HashMap<>();
        if (!exist) {
            datos.put("error", true);
            datos.put("messsage", "Este ya no está we");
            return new ResponseEntity<>(
                    datos,
                    HttpStatus.CONFLICT
            );
        }
        InventoryRepository.deleteById(id);
        datos.put("messsage", "Este sí se eliminó :)");
        return new ResponseEntity<>(
                datos,
                HttpStatus.ACCEPTED
        );
    }
}
