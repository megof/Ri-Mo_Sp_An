package com.MistCode.backend.modules.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.MistCode.backend.core.entities.UserEntity;
import com.MistCode.backend.modules.services.UserService;

@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    private final UserService UserService;

    @Autowired
    public UserController(UserService UserService) {
        this.UserService = UserService;
    }

    @GetMapping
    public List<UserEntity> getUsers() {
        return this.UserService.getUsers();
    }

    @PostMapping
    public ResponseEntity<Object> registrarPrducto(@RequestBody UserEntity User) {
        return this.UserService.newUser(User);
    }

    @DeleteMapping(path = "{PD}")
    public ResponseEntity<Object> eliminarPrducto(@PathVariable("PD") Long id) {
        return this.UserService.DelUser(id);
    }
}
