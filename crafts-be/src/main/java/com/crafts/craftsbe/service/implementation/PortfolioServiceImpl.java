package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Portfolio;
import com.crafts.craftsbe.repository.PortfolioRepository;
import com.crafts.craftsbe.service.PortfolioService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.sampled.Port;
import java.util.List;
import java.util.Optional;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    PortfolioRepository portfolioRepository;

    @Override
    public void savePost(Portfolio portfolio) {
        portfolioRepository.save(portfolio);
    }

    @Override
    public List<Portfolio> getPosts() {
        List<Portfolio> list = portfolioRepository.findAll();

        return list;
    }

    @Override
    public void deletePost(Portfolio portfolio) {
        portfolioRepository.delete(portfolio);
    }

    @Override
    public Portfolio findByID(int id) {

        Optional<Portfolio> res = portfolioRepository.findById(id);

        return res.orElseThrow(() ->
                new EntityNotFoundException("Entity not found"));
    }
}
