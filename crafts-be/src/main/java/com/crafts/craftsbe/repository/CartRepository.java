package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Query("SELECT c FROM Cart c WHERE c.user.id = :id")
    List<Cart> findUserItems(int id);

}
