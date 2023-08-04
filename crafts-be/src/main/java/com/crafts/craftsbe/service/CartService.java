package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;

import java.util.List;

public interface CartService {

    List<Cart> getUserItems(int id);

    void removeCart(Cart cart);

    void saveCart(Cart cart);

    Cart getCartById(int id);




}
