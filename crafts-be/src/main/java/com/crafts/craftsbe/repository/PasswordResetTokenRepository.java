package com.crafts.craftsbe.repository;

import com.crafts.craftsbe.models.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasswordResetTokenRepository  extends JpaRepository<PasswordResetToken, Integer> {

    @Query("SELECT token FROM PasswordResetToken token WHERE token.resetToken = :resetToken")
    Optional<PasswordResetToken> getTokenByName(@Param("resetToken") String resetToken);


}
