package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private JwtService jwtService;

    @Autowired
    UserService userService;

    public ResponseEntity<?> login(String username, String password) {

        User user = userService.getUserByUsername(username);
        Boolean loginSuccessful = validateCredentials(password, user.getPassword());

        if(loginSuccessful) {
            String jwt = jwtService.generateToken(username);
            return ResponseEntity.ok(jwt);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }


    public Boolean validateCredentials(String rawPassword, String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return passwordEncoder.matches(rawPassword, password);
    }

}
