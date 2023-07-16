package com.crafts.craftsbe.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Portfolio")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Portfolio {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "image_data")
    private byte[] imageData;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;
}
