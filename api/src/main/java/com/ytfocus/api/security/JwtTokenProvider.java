package com.ytfocus.api.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    public String generateToken(String userId, String email, String googleAccessToken) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("googleAccessToken", googleAccessToken);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8)), SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateTestToken() {
        return generateToken("test-user-id", "test@example.com", "test-google-access-token");
    }

    public String generateTokenWithGoogleAuth(String userId, String email, String googleAccessToken) {
        if (googleAccessToken == null || googleAccessToken.isEmpty()) {
            throw new IllegalArgumentException("Google OAuth access token is required");
        }
        return generateToken(userId, email, googleAccessToken);
    }

    public Claims validateToken(String token) throws JwtException {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8)))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String getUserIdFromToken(String token) throws JwtException {
        return validateToken(token).getSubject();
    }

    public String getGoogleAccessTokenFromToken(String token) throws JwtException {
        return (String) validateToken(token).get("googleAccessToken");
    }

    public String getEmailFromToken(String token) throws JwtException {
        return (String) validateToken(token).get("email");
    }
}
