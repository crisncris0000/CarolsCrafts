package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepostiory extends JpaRepository<Cart, Integer> {

}
