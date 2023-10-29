package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class EmailController {

    @Autowired
    EmailService emailService;


    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        String firstName = body.get("firstName");
        String lastName = body.get("lastName");
        String emailBody = body.get("body");

        emailService.sendEmail("mckcar411@gmail.com", "Email sent from " + firstName + " " + lastName,
                emailBody +
                "\n\n You can reach them at this email: " + email);

        return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
    }
}
