package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.models.Item;
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
public class ShoppingContainer {

    @Autowired
    ItemService itemService;

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

        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteItem(@RequestParam("id") int id) {




        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }

}
