package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.UserDTO;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
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

    @PostMapping("/create-customer")
    public ResponseEntity<?> createCustomer(@RequestBody UserDTO userDTO) throws StripeException {
        Map<String, Object> params = new HashMap<>();
        params.put("name", userDTO.getFirstName() + " " + userDTO.getLastName());
        params.put("email", userDTO.getEmail());

        Customer customer = Customer.create(params);

        System.out.println(customer.getId());

        return new ResponseEntity<>("Test", HttpStatus.OK);
    }



}
