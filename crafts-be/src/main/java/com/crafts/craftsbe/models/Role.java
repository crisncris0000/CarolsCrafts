package com.crafts.craftsbe.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "Roles")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Role {

    @Column(name = "id")
    @Id
    private int id;

    @Column(name = "role_name")
    private String roleName;
}
