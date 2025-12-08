package com.codecool.whatnow.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    private final Client client;

    public GeminiService(@Value("${gemini.api.key}") String apiKey) {
        this.client = Client.builder()
                .apiKey(apiKey)
                .build();
    }

    public String chat(String message) {
        GenerateContentResponse response = client.models.generateContent(
                "gemini-2.5-flash",
                """
                You are a friendly AI game assistant. 
                Respond conversationally and naturally.
                User: %s
                """.formatted(message),
                null
        );

        return response.text();
    }

    public String recommend(String prompt) {
        GenerateContentResponse response = client.models
                .generateContent(
                        "gemini-2.5-flash",
                        prompt,
                        null
                );

        return response.text();
    }
}
