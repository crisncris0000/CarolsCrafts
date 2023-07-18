package com.crafts.craftsbe.models;
import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "Roles")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Role {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "role_name")
    private String roleName;
}
