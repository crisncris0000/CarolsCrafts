package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Role;
import com.crafts.craftsbe.models.User;
import com.crafts.craftsbe.repository.UserRepository;
import com.crafts.craftsbe.service.UserService;
import jakarta.persistence.*;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

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
}
