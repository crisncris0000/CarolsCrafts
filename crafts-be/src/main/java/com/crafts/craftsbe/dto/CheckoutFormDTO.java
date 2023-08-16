package com.crafts.craftsbe.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CheckoutFormDTO{

    private int id;

    private String firstName;

    private String lastName;

    private String email;

    private String address;

    private String countryCode;

    private String state;

    private String city;

    private float totalPrice;

    private String token;

}
