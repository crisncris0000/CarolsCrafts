package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {
}
