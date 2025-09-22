package com.example.backend.Controllers;

import jakarta.annotation.PostConstruct;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class TestController {
    private final DatabaseClient databaseClient;

    public TestController(DatabaseClient databaseClient) {
        this.databaseClient = databaseClient;
    }

    @PostMapping("/test")
    public Mono<String> test(){

        return databaseClient.sql("INSERT INTO products(title,imageURL) VALUES ('test','https://content.rozetka.com.ua/goods/images/big/3975900.jpg')")
                .fetch()
                .rowsUpdated()
                .then(Mono.just("successful"));
    }
}
