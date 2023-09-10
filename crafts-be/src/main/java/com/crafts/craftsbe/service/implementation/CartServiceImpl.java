package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.repository.CartRepository;
import com.crafts.craftsbe.service.CartService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
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
        return cartRepository.getUserItems(id);
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

    @Override
    public Cart getCart(int userId, int itemId) {
        return cartRepository.getCartByUserAndItemId(userId, itemId);
    }

    @Override
    public Cart getCartByCustomization(int userId, String userCustomization) {
        return cartRepository.getCartItemsByCustomization(userId, userCustomization);
    }

    @Transactional
    @Override
    public void clearUserCart(int userId) {
        cartRepository.clearCartByUserId(userId);
    }

    @Transactional
    @Override
    public void clearUserCartByItemId(int itemId) {
        cartRepository.clearCartByItemId(itemId);
    }
}
