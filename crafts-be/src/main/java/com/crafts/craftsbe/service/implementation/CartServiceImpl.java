package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.repository.CartRepository;
import com.crafts.craftsbe.service.CartService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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

    @Override
    public Cart getCartById(int id) {
        Optional<Cart> res = cartRepository.findById(id);

        return res.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
    }
}
