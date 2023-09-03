package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.PaymentHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentHistoryRepository extends JpaRepository<PaymentHistory, Integer> {

    @Query("SELECT p FROM PaymentHistory p WHERE p.user.id = :userId")
    List<PaymentHistory> getUserPayments(@Param("userId") int userId);

}
