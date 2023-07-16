package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Role;

import java.util.List;

public interface RoleService {

    List<Role> getRoles();

    Role getRoleById(int id);

    Role getRoleByName(String roleName);

}
