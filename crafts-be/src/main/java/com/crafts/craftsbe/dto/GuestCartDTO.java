package com.crafts.craftsbe.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GuestCartDTO {

    private ItemDTO itemObject;
    private String userCustomization;
    private Integer quantity;
}
