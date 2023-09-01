package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.PasswordResetToken;

public interface PasswordResetTokenService {

    void saveToken(PasswordResetToken token);

    boolean tokenExist(String tokenName) throws Exception;

}
