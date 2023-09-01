package com.crafts.craftsbe.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "password_reset_token")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class PasswordResetToken {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "reset_token")
    private String resetToken;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;


}
