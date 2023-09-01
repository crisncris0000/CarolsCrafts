package com.crafts.craftsbe.service.implementation;
import com.crafts.craftsbe.models.PasswordResetToken;
import com.crafts.craftsbe.repository.PasswordResetTokenRepository;
import com.crafts.craftsbe.service.PasswordResetTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PasswordResetTokenServiceImpl implements PasswordResetTokenService {

    @Autowired
    PasswordResetTokenRepository passwordResetTokenRepository;

    @Override
    public void saveToken(PasswordResetToken token) {
        passwordResetTokenRepository.save(token);
    }

    @Override
    public boolean tokenExist(String tokenName) {
        return passwordResetTokenRepository.getTokenByName(tokenName).isPresent();
    }


}
