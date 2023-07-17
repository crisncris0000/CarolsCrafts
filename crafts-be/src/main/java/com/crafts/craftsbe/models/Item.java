package com.crafts.craftsbe.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "image_data")
    private byte[] imageData;

    @Column(name = "item_title")
    private String itemTitle;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "created_at")
    private Date createdAt;

    @Column(name = "updated_at")
    private Date updatedAt;
}
