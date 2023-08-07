package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.models.Portfolio;
import com.crafts.craftsbe.service.PortfolioService;
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
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    PortfolioService portfolioService;

    @PostMapping("/create-post")
    public ResponseEntity<String> newPost(@RequestParam("myImage") MultipartFile multipartFile) throws IOException {

        byte[] fileBytes = multipartFile.getBytes();
        String mimeType = multipartFile.getContentType();

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        Portfolio portfolio = Portfolio.builder()
                .imageData(fileBytes)
                .mimeType(mimeType)
                .createdAt(timestamp)
                .updatedAt(timestamp)
                .build();



        portfolioService.savePost(portfolio);

        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }

    @GetMapping("/get-posts")
    public ResponseEntity<List<Portfolio>> getPosts() {
        List<Portfolio> list = portfolioService.getPosts();

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @DeleteMapping("/delete-post")
    public ResponseEntity<String> deleteImage(@RequestParam("id") int id) {
        Portfolio portfolio = portfolioService.findByID(id);
        portfolioService.deletePost(portfolio);

        return new ResponseEntity<>("Deleted post", HttpStatus.OK);
    }

    @GetMapping("/get-post/{id}")
    public ResponseEntity<Portfolio> getPost(@PathVariable("id") int id) {
        Portfolio portfolio = portfolioService.findByID(id);
        return new ResponseEntity<Portfolio>(portfolio, HttpStatus.OK);
    }

}
