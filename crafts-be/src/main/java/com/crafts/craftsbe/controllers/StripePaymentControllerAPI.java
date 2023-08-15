package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/stripe")
public class StripePaymentControllerAPI {

    @Value("${app.stripe.apikey}")
    String API_KEY;

    @PostMapping("/create-payment")
    public ResponseEntity<?> createPayment(@RequestBody CheckoutFormDTO checkoutFormDTO) throws StripeException {
        Stripe.apiKey = API_KEY;

        long amountInCents = (long) (checkoutFormDTO.getTotalPrice() * 100);

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setCurrency("usd")
                .setAmount(amountInCents)
                .setReceiptEmail("Christopherrivera384@gmail.com")
                .putMetadata("address", checkoutFormDTO.getAddress())
                .putMetadata("city", checkoutFormDTO.getCity())
                .putMetadata("state", checkoutFormDTO.getState())
                .putMetadata("country", checkoutFormDTO.getCountryCode())
                .build();

        PaymentIntent intent = PaymentIntent.create(params);

        if (intent == null || intent.getClientSecret() == null) {
            return new ResponseEntity<>("Payment failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(intent.getClientSecret(), HttpStatus.OK);
    }


}
