package com.example.kitchenstory.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.kitchenstory.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
