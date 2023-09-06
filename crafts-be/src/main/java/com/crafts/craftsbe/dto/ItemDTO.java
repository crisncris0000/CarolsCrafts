package com.crafts.craftsbe.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class ItemDTO {

    private int id;

    private byte[] imageData;

    private String mimeType;

    private String itemTitle;

    private String itemDescription;

    private float itemPrice;

    private Date createdAt;

    private Date updatedAt;
}
