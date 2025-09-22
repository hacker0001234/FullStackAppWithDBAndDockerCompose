package com.example.backend.Configs;

import jakarta.annotation.PostConstruct;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Component;

@Component
public class TablesConfig {

    private final DatabaseClient databaseClient;

    public TablesConfig(DatabaseClient databaseClient) {
        this.databaseClient = databaseClient;
    }

    @PostConstruct
    public void init() {
        String sql = """
                CREATE TABLE IF NOT EXISTS products(
                       id BIGINT PRIMARY KEY AUTO_INCREMENT,
                       title VARCHAR(255) NOT NULL,
                       imageURL VARCHAR(255) NOT NULL
                );
                """;

        databaseClient.sql(sql)
                .fetch()
                .rowsUpdated()
                .doOnNext(count ->
                        System.out.println("Таблиця products створена/оновлена, змінено рядків: " + count)
                )
                .block();
    }
}
