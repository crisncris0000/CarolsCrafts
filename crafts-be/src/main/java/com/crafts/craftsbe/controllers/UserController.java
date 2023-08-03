package com.crafts.craftsbe.controllers;
import com.crafts.craftsbe.dto.UserDTO;
import com.crafts.craftsbe.models.Cart;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.AuthService;
import com.crafts.craftsbe.service.MyUserDetailsService;
import com.crafts.craftsbe.service.RoleService;
import com.crafts.craftsbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    AuthService authService;

    @GetMapping("/get-users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {

        String cryptPassword = userDetailsService.cryptPassword(userDTO.getPassword(), 12);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        User user = User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail().toLowerCase())
                .password(cryptPassword)
                .role(roleService.getRoleByName("USER"))
                .createdAt(timestamp)
                .updatedAt(timestamp)
                .build();

        userService.saveUser(user);
        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {
        return authService.login(userDTO.getEmail(), userDTO.getPassword());
    }

}
