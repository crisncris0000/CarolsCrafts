package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Cart;

import java.util.List;

public interface CartService {

    List<Cart> getUserItems(int id);

    void removeCart(Cart cart);

    void saveCart(Cart cart);

    Cart getCartById(int id);

    Cart getCart(int userId, int itemId);

     Cart getCartByCustomization(int userId, String userCustomization);

    void clearUserCart(int userId);

    void clearUserCartByItemId(int itemId);


}
