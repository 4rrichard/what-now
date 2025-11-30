package com.codecool.whatnow.controller;

import com.codecool.whatnow.service.RawgService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecommendationController {

    private final RawgService rawgService;

    public RecommendationController(RawgService rawgService) {
        this.rawgService = rawgService;
    }

    @GetMapping("/api/recommend")
    public String recommend(@RequestParam(required = false) String recommendation) {
        if (recommendation == null || recommendation.isBlank()) {
            recommendation = "popular"; 
        }
        return rawgService.getGames(recommendation);
    }
}
