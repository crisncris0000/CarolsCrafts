package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;

import java.util.List;

public interface CartService {

    List<Item> getUserItems(String username);

    void removeItem(Item item);

    void removeCart(int id);

    Cart findByUserAndItem(int userId, int itemId);

}
