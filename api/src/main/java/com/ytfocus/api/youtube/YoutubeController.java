package com.ytfocus.api.youtube;

import com.ytfocus.api.security.JwtUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/youtube")
@RequiredArgsConstructor
public class YoutubeController {

    private final YoutubeService youtubeService;

    @GetMapping("/subscriptions")
    public ResponseEntity<List<Map<String, Object>>> getSubscriptions(Authentication authentication) {
        JwtUserDetails userDetails = (JwtUserDetails) authentication.getPrincipal();
        List<Map<String, Object>> subscriptions = youtubeService.getSubscriptions(userDetails.getGoogleAccessToken());
        return ResponseEntity.ok(subscriptions);
    }

    @GetMapping("/liked-videos")
    public ResponseEntity<List<Map<String, Object>>> getLikedVideos(Authentication authentication) {
        JwtUserDetails userDetails = (JwtUserDetails) authentication.getPrincipal();
        List<Map<String, Object>> videos = youtubeService.getLikedVideos(userDetails.getGoogleAccessToken());
        return ResponseEntity.ok(videos);
    }

    @GetMapping("/feed")
    public ResponseEntity<Map<String, Object>> getFeed(Authentication authentication) {
        JwtUserDetails userDetails = (JwtUserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(youtubeService.getFeed(userDetails.getGoogleAccessToken()));
    }
}
