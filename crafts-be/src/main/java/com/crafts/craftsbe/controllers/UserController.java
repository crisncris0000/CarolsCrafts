package com.crafts.craftsbe.controllers;
import com.crafts.craftsbe.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users")
    public User getUsers(){
        return null;
    }


}
