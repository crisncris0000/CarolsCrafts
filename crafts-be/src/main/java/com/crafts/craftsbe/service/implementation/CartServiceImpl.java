package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.repository.CartRepostiory;
import com.crafts.craftsbe.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CartServiceImpl implements CartService {

    @Autowired
    CartRepostiory cartRepostiory;

    @Override
    public List<Item> getUserItems(String username) {
        return null;
    }

    @Override
    public void removeItem(Item item) {

    }

    @Override
    public void removeCart(int id) {

    }

    @Override
    public Cart findByUserAndItem(int userId, int itemId) {
        return null;
    }
}
