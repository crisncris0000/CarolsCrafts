package com.crafts.craftsbe.controllers;

import com.crafts.craftsbe.models.Portfolio;
import com.crafts.craftsbe.response.JsonResponse;
import com.crafts.craftsbe.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sound.sampled.Port;
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
    public JsonResponse newPost(@RequestParam("myImage") MultipartFile multipartFile) throws IOException {
        JsonResponse jsonResponse = JsonResponse.builder()
                .response("Accepted")
                .status(HttpStatus.ACCEPTED)
                .build();

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

        return jsonResponse;
    }

    @GetMapping("/get-posts")
    public ResponseEntity<List<Portfolio>> getPosts() {
        List<Portfolio> list = portfolioService.getPosts();

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @DeleteMapping("/delete-post/{id}")
    public JsonResponse deleteImage(@PathVariable("id") int id) {
        Portfolio portfolio = portfolioService.findByID(id);

        JsonResponse jsonResponse = JsonResponse.builder()
                .response("Accepted")
                .status(HttpStatus.ACCEPTED)
                .build();

        portfolioService.deletePost(portfolio);

        return jsonResponse;
    }

    @GetMapping("/get-post/{id}")
    public ResponseEntity<Portfolio> getPost(@PathVariable("id") int id) {
        Portfolio portfolio = portfolioService.findByID(id);
        return new ResponseEntity<Portfolio>(portfolio, HttpStatus.OK);
    }

}
