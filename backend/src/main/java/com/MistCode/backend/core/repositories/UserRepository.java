package com.MistCode.backend.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.MistCode.backend.core.entities.UserEntity;
//@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findUserByUsername(String username);
}
