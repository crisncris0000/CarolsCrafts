package com.crafts.craftsbe.models;

import lombok.*;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "portfolio")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Portfolio {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "image_data")
    private byte[] imageData;

    @Column(name = "mime_type")
    private String mimeType;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;
}
