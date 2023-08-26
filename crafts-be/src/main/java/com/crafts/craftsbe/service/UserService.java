package com.crafts.craftsbe.service;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.crafts.craftsbe.models.Role;
import com.crafts.craftsbe.models.User;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import java.util.List;

public interface UserService {

    List<User> getUsers();

    User getUserById(int id);

    User getUserByUsername(String username);

    Role getUserRole(User user);

    void saveUser(User user);

    boolean userExist(String username);

    PaymentIntent proccessUserPayment(CheckoutFormDTO checkoutFormDTO) throws StripeException;

    String generateToken();
}
