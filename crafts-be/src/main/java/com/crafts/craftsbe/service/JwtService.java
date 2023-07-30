package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    @Value("${app.jwt.secretkey}")
    private String SECRET_KEY;

    @Autowired
    private UserService userService;

    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        User user = userService.getUserByUsername(username);
        claims.put("role", userService.getUserRole(user).getRoleName());
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 60000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())

                .compact();
    }

}
