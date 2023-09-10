package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Query("SELECT c FROM Cart c WHERE c.user.id = :id")
    List<Cart> getUserItems(@Param("id") int id);

    @Query("SELECT c FROM Cart c WHERE c.user.id = :userId AND c.item.id = :itemId")
    Cart getCartByUserAndItemId(@Param("userId") int userId, @Param("itemId") int itemId);

    @Modifying
    @Query("DELETE Cart c WHERE c.user.id = :userId")
    void clearCartByUserId(@Param("userId") int userId);

    @Query("SELECT c FROM Cart c WHERE c.user.id = :userId AND c.userCustomization LIKE :customizationText")
    Cart getCartItemsByCustomization(@Param("userId") int userId, @Param("customizationText") String customizationText);

    @Modifying
    @Query("DELETE Cart c WHERE c.item.id = :itemId")
    void clearCartByItemId(@Param("itemId") int itemId);

}
