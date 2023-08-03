package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.repository.CartRepository;
import com.crafts.craftsbe.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartRepository cartRepository;

    @Override
    public List<Cart> getUserItems(int id) {
        return cartRepository.findUserItems(id);
    }

    @Override
    public void removeCart(Cart cart) {
        cartRepository.delete(cart);
    }

    @Override
    public void saveCart(Cart cart) {
        cartRepository.save(cart);
    }
}
