package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.crafts.craftsbe.dto.UserDTO;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.PaymentIntent;
import org.hibernate.annotations.Check;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/stripe")
public class StripePaymentControllerAPI {

    @Value("${app.stripe.apikey}")
    String API_KEY;

    @PostMapping("/create-payment")
    public ResponseEntity<String> createPayment(@RequestBody CheckoutFormDTO checkoutFormDTO) throws StripeException {
        Map<String, Object> params = new HashMap<>();
        Stripe.apiKey = API_KEY;

        params.put("currency", "usd");

        System.out.println(checkoutFormDTO.toString());



        return new ResponseEntity<>("Payment Successful",HttpStatus.OK);
    }



}
