package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    @Query("SELECT role FROM Role role WHERE role.roleName = :roleName")
    Optional<Role> getRoleByName(@Param("roleName") String roleName);

}
