package com.crafts.craftsbe.models;
import lombok.*;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "items")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "image_data")
    private byte[] imageData;

    @Column(name = "mime_type")
    private String mimeType;

    @Column(name = "item_title")
    private String itemTitle;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "item_price")
    private float itemPrice;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;
}
