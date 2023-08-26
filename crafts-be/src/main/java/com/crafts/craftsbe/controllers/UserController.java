package com.crafts.craftsbe.controllers;
import com.crafts.craftsbe.dto.UserDTO;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

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

    @Autowired
    EmailService emailService;

    @GetMapping("/get-users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {

        String cryptPassword = userDetailsService.cryptPassword(userDTO.getPassword(), 12);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        boolean exists = userService.userExist(userDTO.getEmail());
        
        if(exists) {
            return new ResponseEntity<>("User already exist", HttpStatus.NOT_ACCEPTABLE);
        }

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
        return new ResponseEntity<>("Accepted", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {
        return authService.login(userDTO.getEmail(), userDTO.getPassword());
    }

    @PostMapping("/send-token")
    public ResponseEntity<String> sendToken(@RequestBody Map<String, String> body){
        String token = userService.generateToken();

        String email = body.get("email");

        boolean exist = userService.userExist(email);

        if(!exist) {
            return new ResponseEntity<>("No user with that email", HttpStatus.NOT_ACCEPTABLE);
        }

        emailService.sendEmail(email, "Verification Token",
                                "Here is the requested token that you asked for token: " + token +
                                "\nPlease note that it will expire within 15 minutes");

        return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
    }

}
