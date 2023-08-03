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

@RestController
@RequestMapping("/api/users/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @Autowired
    UserService userService;

    @Autowired
    ItemService itemService;

    @GetMapping("/user-cart/{id}")
    public ResponseEntity<List<Cart>> getUserCart(@RequestParam("id") int id) {
        List<Cart> cartList = cartService.getUserItems(id);

        return new ResponseEntity<>(cartList, HttpStatus.OK);
    }

    @PostMapping("/add-to-cart/{userId}/{itemId}")
    public ResponseEntity<String> saveCart(@RequestParam int userId, @RequestParam int itemId) {

        User user = userService.getUserById(userId);
        Item item = itemService.getItemById(itemId);

        Cart cart = Cart.builder().
                        user(user).
                        item(item).
                        quantity(1).
                        build();

        cartService.saveCart(cart);

        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }


}
