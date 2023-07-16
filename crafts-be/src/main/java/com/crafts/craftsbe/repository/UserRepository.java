package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT user FROM Users WHERE user.email = :username")
    Optional<User> findByUsername(String username);

}
