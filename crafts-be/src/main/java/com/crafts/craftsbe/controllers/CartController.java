package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.CartService;
import com.crafts.craftsbe.service.ItemService;
import com.crafts.craftsbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @Autowired
    UserService userService;

    @Autowired
    ItemService itemService;

    @GetMapping("/user-cart")
    public ResponseEntity<List<Cart>> getUserCart(@RequestParam("id") int id) {
        List<Cart> cartList = cartService.getUserItems(id);

        return new ResponseEntity<>(cartList, HttpStatus.OK);
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<String> saveCart(@RequestBody Map<String, Integer> ids) {

        int userId = ids.get("userId");
        int itemId = ids.get("itemId");

        User user = userService.getUserById(userId);
        Item item = itemService.getItemById(itemId);

        Cart cart = cartService.getCart(userId, itemId);

        if(cart == null) {
            cart = Cart.builder()
                    .user(user)
                    .item(item)
                    .quantity(1)
                    .build();
        } else {
            int quantity = cart.getQuantity();
            cart.setQuantity(quantity + 1);
        }

        cartService.saveCart(cart);
        return new ResponseEntity<>("Added new Cart", HttpStatus.OK);
    }

    @DeleteMapping("/remove-cart")
    public ResponseEntity<String> removeCart(@RequestParam("id") int id) {

        Cart cart = cartService.getCartById(id);

        if(cart.getQuantity() > 1) {
            int quantity = cart.getQuantity();
            cart.setQuantity(quantity - 1);
            cartService.saveCart(cart);
        } else {
            cartService.removeCart(cart);
        }

        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }





}
