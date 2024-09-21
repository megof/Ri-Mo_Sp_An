package com.MistCode.backend.modules.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.MistCode.backend.core.entities.InventoryEntity;
import com.MistCode.backend.modules.services.InventoryService;

@RestController
@RequestMapping(path = "api/v1/inventory")
public class InventoryController {

    private final InventoryService InventoryService;

    @Autowired
    public InventoryController(InventoryService InventoryService) {
        this.InventoryService = InventoryService;
    }

    @GetMapping
    public List<InventoryEntity> getInventorys() {
        return this.InventoryService.getInventorys();
    }

    @PostMapping
    public ResponseEntity<Object> registrarInventory(@RequestBody InventoryEntity Inventory) {
        return this.InventoryService.newInventory(Inventory);
    }

    @DeleteMapping(path = "{PD}")
    public ResponseEntity<Object> eliminarInventory(@PathVariable("PD") Long id) {
        return this.InventoryService.DelInventory(id);
    }
}
