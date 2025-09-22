package com.example.backend.Services;

import com.example.backend.DTOs.ProductDTO;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.util.List;

@Service
public class ProductsService {
    private final DatabaseClient databaseClient;

    public ProductsService(DatabaseClient databaseClient) {
        this.databaseClient = databaseClient;
    }


    public Flux<ProductDTO> getAllProducts(){
        return databaseClient.sql("SELECT * FROM products")
                .map(product -> {
                    ProductDTO productDTO = new ProductDTO();

                    productDTO.setImageURL(product.get("imageURL",String.class));
                    productDTO.setTitle(product.get("title",String.class));
                    productDTO.setId(product.get("id",Long.class));

                    return productDTO;
                }).all();
    }

}
