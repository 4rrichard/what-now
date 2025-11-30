package com.codecool.whatnow.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class RawgService {

    private final WebClient webClient;
    private final String apiKey;

    public RawgService(WebClient webClient, @Value("${rawg.api.key}") String apiKey) {
        this.webClient = webClient;
        this.apiKey = apiKey;
    }

    public String getGames(String query) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/games")
                        .queryParam("key",apiKey)
                        .queryParam("search", query)
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
