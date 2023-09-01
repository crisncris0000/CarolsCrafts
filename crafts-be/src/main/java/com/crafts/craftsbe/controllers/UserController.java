package com.crafts.craftsbe.controllers;
import com.crafts.craftsbe.dto.UserDTO;
import com.crafts.craftsbe.models.PasswordResetToken;
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

    @Autowired
    PasswordResetTokenService tokenService;

    @GetMapping("/get-users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {

        String cryptPassword = userDetailsService.cryptPassword(userDTO.getPassword(), 12);

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        boolean exists = userService.userExist(userDTO.getEmail().toLowerCase());
        
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
        return authService.login(userDTO.getEmail().toLowerCase(), userDTO.getPassword());
    }

    @PostMapping("/send-token")
    public ResponseEntity<String> sendToken(@RequestBody Map<String, String> body) {
        String resetToken = userService.generateToken();

        String email = body.get("email").toLowerCase();

        boolean exist = userService.userExist(email);

        if(!exist) {
            return new ResponseEntity<>("No user with that email", HttpStatus.NOT_ACCEPTABLE);
        }

        emailService.sendEmail(email, "Verification Token",
                                "Here is the requested token that you asked for token: " + resetToken +
                                "\nPlease note that it will expire within 15 minutes");

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        PasswordResetToken token = PasswordResetToken.builder()
                .resetToken(resetToken)
                .createdAt(timestamp)
                .updatedAt(timestamp)
                .build();

        tokenService.saveToken(token);

        return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> body) throws Exception {

        String userToken = body.get("token");

        boolean exist = tokenService.tokenExist(userToken);

        if(!exist) {
            return new ResponseEntity<>("Token not found", HttpStatus.NOT_FOUND);
        }

        String email = body.get("email").toLowerCase();
        String newPassword = body.get("password");

        User user = userService.getUserByUsername(email);

        String cryptPassword = userDetailsService.cryptPassword(newPassword, 12);

        user.setPassword(cryptPassword);

        userService.saveUser(user);

        return new ResponseEntity<>("Password successfully changed", HttpStatus.OK);
    }

}
