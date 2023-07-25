package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.service.implementation.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByUsername(username);

        return new MyUserDetails(user);
    }

    public String cryptPassword(String password, int workload) {
        String gensalt = BCrypt.gensalt(workload);

        String cryptPassword = BCrypt.hashpw(password, gensalt);

        return cryptPassword;
    }
}
