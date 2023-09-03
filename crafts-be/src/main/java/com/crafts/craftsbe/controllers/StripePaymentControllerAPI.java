package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.PaymentHistory;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.CartService;
import com.crafts.craftsbe.service.PaymentHistoryService;
import com.crafts.craftsbe.service.UserService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/payment")
public class StripePaymentControllerAPI {

    @Autowired
    UserService userService;

    @Autowired
    CartService cartService;

    @Autowired
    PaymentHistoryService paymentHistoryService;


    @PostMapping("/process-payment")
    public ResponseEntity<?> createPayment(@RequestBody CheckoutFormDTO checkoutFormDTO) throws StripeException {

        PaymentIntent intent = userService.proccessUserPayment(checkoutFormDTO);

        List<Cart> cartList = cartService.getUserItems(checkoutFormDTO.getId());

        String description = cartList.stream()
                .map(cart -> {
                    return "Item: \n" + cart.getQuantity() + "x " + cart.getItem().getItemTitle() + "\nDescription:\n"
                            + cart.getUserCustomization();
                })
                .collect(Collectors.joining(",\n\n"));

        Date date = new Date();

        Timestamp timestamp = new Timestamp(date.getTime());

        User user = userService.getUserById(checkoutFormDTO.getId());


        PaymentHistory paymentHistory = PaymentHistory.builder()
                .transactionId(intent.getId())
                .totalPrice(checkoutFormDTO.getTotalPrice())
                .description(description)
                .createdAt(timestamp)
                .updatedAt(timestamp)
                .user(user)
                .build();

        paymentHistoryService.savePayment(paymentHistory);
        cartService.clearUserCart(checkoutFormDTO.getId());
        return new ResponseEntity<>(intent.getClientSecret(), HttpStatus.OK);
    }

    @GetMapping("/payment-history")
    public ResponseEntity<List<PaymentHistory>> getUserPaymentHistory(@RequestParam("id") int id) {

        List<PaymentHistory> paymentHistoryList = paymentHistoryService.getUserPayments(id);

        return new ResponseEntity<>(paymentHistoryList, HttpStatus.OK);
    }


}
