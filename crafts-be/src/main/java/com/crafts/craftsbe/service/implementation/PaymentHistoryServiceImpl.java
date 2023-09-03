package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.PaymentHistory;
import com.crafts.craftsbe.repository.PaymentHistoryRepository;
import com.crafts.craftsbe.service.PaymentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentHistoryServiceImpl implements PaymentHistoryService {

    @Autowired
    PaymentHistoryRepository paymentHistoryRepository;

    @Override
    public void savePayment(PaymentHistory paymentHistory) {
        paymentHistoryRepository.save(paymentHistory);
    }

    @Override
    public List<PaymentHistory> getUserPayments(int id) {
        return paymentHistoryRepository.getUserPayments(id);
    }
}
