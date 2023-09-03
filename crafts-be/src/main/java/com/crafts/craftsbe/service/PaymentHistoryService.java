package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.PaymentHistory;

import java.util.List;

public interface PaymentHistoryService {

    void savePayment(PaymentHistory paymentHistory);

    List<PaymentHistory> getUserPayments(int id);

}
