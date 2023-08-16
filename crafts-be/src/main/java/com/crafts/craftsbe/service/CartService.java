package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Cart;

import java.util.List;

public interface CartService {

    List<Cart> getUserItems(int id);

    void removeCart(Cart cart);

    void saveCart(Cart cart);

    Cart getCartById(int id);

    Cart getCart(int userId, int itemId);

    void clearUserCart(int userId);


}
