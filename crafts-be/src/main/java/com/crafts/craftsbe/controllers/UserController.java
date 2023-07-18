package com.crafts.craftsbe.controllers;
import com.crafts.craftsbe.dto.UserDTO;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.MyUserDetailsService;
import com.crafts.craftsbe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    MyUserDetailsService userDetailsService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/create-user")
    public String createUser(@RequestBody UserDTO userDTO) {

        System.out.printf("First name: %s Last name: %s email: %s password: %s", userDTO.getFirstName(),
                userDTO.getLastName(), userDTO.getEmail(), userDTO.getPassword());

        System.out.println(userDetailsService.cryptPassword(userDTO.getPassword(), 12));

        return "Success";
    }


}
