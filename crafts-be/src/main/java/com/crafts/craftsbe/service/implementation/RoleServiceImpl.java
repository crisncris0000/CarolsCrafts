package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Role;
import com.crafts.craftsbe.repository.RoleRepository;
import com.crafts.craftsbe.service.RoleService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role getRoleById(int id) {

        Optional<Role> res = roleRepository.findById(id);

        return res.orElseThrow(() ->
                new EntityNotFoundException("User with the id " + id + " not found"));
    }

    @Override
    public Role getRoleByName(String roleName) {

        Optional<Role> res = roleRepository.getRoleByName(roleName);

        return res.orElseThrow(() ->
                new EntityNotFoundException("Role with the name " + roleName + " not found"));
    }
}
