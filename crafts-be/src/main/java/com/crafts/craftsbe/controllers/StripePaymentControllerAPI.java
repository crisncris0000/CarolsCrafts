package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.crafts.craftsbe.service.CartService;
import com.crafts.craftsbe.service.UserService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/stripe")
public class StripePaymentControllerAPI {

    @Autowired
    UserService userService;

    @Autowired
    CartService cartService;


    @PostMapping("/process-payment")
    public ResponseEntity<?> createPayment(@RequestBody CheckoutFormDTO checkoutFormDTO) throws StripeException {

        PaymentIntent intent = userService.proccessUserPayment(checkoutFormDTO);

        cartService.clearUserCart(checkoutFormDTO.getId());
        return new ResponseEntity<>(intent.getClientSecret(), HttpStatus.OK);
    }


}
