package com.example.backend.Controllers;

import com.example.backend.DTOs.ProductDTO;
import com.example.backend.Services.ProductsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/api/products")
public class ProductsController {
    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/get")
    public Flux<ProductDTO> getAllProducts() {
        return productsService.getAllProducts();
    }
}
