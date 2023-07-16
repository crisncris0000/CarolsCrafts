package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Role;
import com.crafts.craftsbe.models.User;

import java.util.List;

public interface UserService {

    List<User> getUsers();

    User getUserById(int id);

    User getUserByUsername(String username);

    Role getUserRoleByName(String username);

    Role getUserRoleById(int id);

    void saveUser(User user);
}
