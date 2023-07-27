package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Portfolio;

import java.util.List;


public interface PortfolioService {

    void savePost(Portfolio portfolio);

    List<Portfolio> getPosts();

    void deletePost(Portfolio portfolio);

    Portfolio findByID(int id);
}
