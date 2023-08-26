package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.dto.CheckoutFormDTO;
import com.crafts.craftsbe.models.Role;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.repository.UserRepository;
import com.crafts.craftsbe.service.UserService;
import com.stripe.Stripe;
import com.stripe.exception.InvalidRequestException;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Value("${app.stripe.apikey}")
    String API_KEY;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {
        Optional<User> res = userRepository.findById(id);

        return res.orElseThrow(() ->
                new EntityNotFoundException("User with the id " + id  + " not found"));
    }

    @Override
    public User getUserByUsername(String username) {
        Optional<User> res = userRepository.findByUsername(username);

        return res.orElseThrow(() ->
                new EntityNotFoundException("User with the email " + username + " not found"));
    }

    @Override
    public Role getUserRole(User user) {
        return user.getRole();
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public boolean userExist(String username) {

        Optional<User> user = userRepository.findByUsername(username);

        return user.isPresent();
    }

    @Override
    public PaymentIntent proccessUserPayment(CheckoutFormDTO checkoutFormDTO) throws StripeException {
        Stripe.apiKey = API_KEY;

        long amountInCents = (long) (checkoutFormDTO.getTotalPrice() * 100);

        Map<String, Object> addressMap = new HashMap<>();
        addressMap.put("line1", checkoutFormDTO.getAddress());
        addressMap.put("city", checkoutFormDTO.getCity());
        addressMap.put("state", checkoutFormDTO.getState());
        addressMap.put("country", checkoutFormDTO.getCountryCode());

        Map<String, Object> shippingMap = new HashMap<>();
        shippingMap.put("name", checkoutFormDTO.getFirstName() + " " + checkoutFormDTO.getLastName());
        shippingMap.put("address", addressMap);

        Map<String, Object> params = new HashMap<>();
        params.put("currency", "usd");
        params.put("amount", amountInCents);
        params.put("receipt_email", "Christopherrivera384@gmail.com");
        params.put("shipping", shippingMap);

        PaymentIntent intent = PaymentIntent.create(params);

        if (intent == null || intent.getClientSecret() == null) {
            String errorMessage = "Failed to create PaymentIntent or retrieve client secret.";
            throw new InvalidRequestException(errorMessage, null, null, null, null, null);
        }

        return intent;
    }

    @Override
    public String generateToken() {
        return UUID.randomUUID().toString();
    }


}
