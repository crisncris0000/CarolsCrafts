package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.service.CartService;
import com.crafts.craftsbe.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/shop")
public class ShoppingController {

    @Autowired
    ItemService itemService;

    @Autowired
    CartService cartService;

    @GetMapping("/get-items")
    public ResponseEntity<List<Item>> getItems() {
        List<Item> itemList = itemService.getItems();

        return new ResponseEntity<>(itemList, HttpStatus.OK);
    }

    @PostMapping("/add-item")
    public ResponseEntity<String> addItem(@RequestParam("imageData") MultipartFile imageData,
                                @RequestParam("itemTitle") String itemTitle,
                                @RequestParam("itemDescription") String itemDescription,
                                @RequestParam("itemPrice") float itemPrice) throws IOException {

        String mimeType = imageData.getContentType();
        byte[] imageBytes = imageData.getBytes();

        Date date = new Date();

        Timestamp timestamp = new Timestamp(date.getTime());

        Item item = Item.builder()
                .imageData(imageBytes)
                .mimeType(mimeType)
                .itemTitle(itemTitle)
                .itemDescription(itemDescription)
                .itemPrice(itemPrice)
                .createdAt(timestamp)
                .updatedAt(timestamp)
                .build();


        itemService.saveItem(item);

        return new ResponseEntity<>("Successfully added a new item", HttpStatus.OK);
    }

    @DeleteMapping("/delete-item")
    public ResponseEntity<String> deleteItem(@RequestParam("id") int id) {

        Item item = itemService.getItemById(id);

        cartService.clearUserCartByItemId(id);

        itemService.deleteItem(item);

        return new ResponseEntity<>("Deleted item", HttpStatus.OK);
    }



}
