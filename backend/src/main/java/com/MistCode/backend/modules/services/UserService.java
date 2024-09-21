package com.MistCode.backend.modules.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.MistCode.backend.core.entities.UserEntity;
import com.MistCode.backend.core.repositories.UserRepository;

@Service
public class UserService {

    private HashMap<String, Object> datos;
    private final UserRepository Userrepository;

    @Autowired
    public UserService(UserRepository Userrepository) {
        this.Userrepository = Userrepository;
    }

    public List<UserEntity> getUsers() {
        return this.Userrepository.findAll();
    }

    public ResponseEntity<Object> newUser(UserEntity User) {
        Optional<UserEntity> res = Userrepository.findUserByUsername(User.getUsername());
        datos = new HashMap<>();
        if (res.isPresent()) {
            datos.put("error", true);
            datos.put("messsjage", "Este ya está we");
            return new ResponseEntity<>(
                    datos,
                    HttpStatus.CONFLICT
            );
        }
        Userrepository.save(User);
        datos.put("data", User);
        datos.put("messsage", "Este sí :)");
        return new ResponseEntity<>(
                datos,
                HttpStatus.CREATED
        );
    }

    public ResponseEntity<Object> DelUser(Long id) {
        boolean exist = this.Userrepository.existsById(id);
        datos = new HashMap<>();
        if (!exist) {
            datos.put("error", true);
            datos.put("messsage", "Este ya no está we");
            return new ResponseEntity<>(
                    datos,
                    HttpStatus.CONFLICT
            );
        }
        Userrepository.deleteById(id);
        datos.put("messsage", "Este sí se eliminó :)");
        return new ResponseEntity<>(
                datos,
                HttpStatus.ACCEPTED
        );
    }
}
