package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.dto.ItemDTO;
import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.response.JsonResponse;
import com.crafts.craftsbe.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shop")
public class ShoppingContainer {

    @Autowired
    ItemService itemService;

    @GetMapping("/get-items")
    public ResponseEntity<List<Item>> getItems() {
        List<Item> itemList = itemService.getItems();

        return new ResponseEntity<>(itemList, HttpStatus.OK);
    }

    @GetMapping("/add-item")
    public JsonResponse addItem(@RequestBody ItemDTO itemDTO) {
        List<Item> itemList = itemService.getItems();

        System.out.println(itemDTO.toString());

        JsonResponse jsonResponse = JsonResponse.builder()
                .response("Accepted")
                .status(HttpStatus.ACCEPTED).build();



        return jsonResponse;
    }

}
