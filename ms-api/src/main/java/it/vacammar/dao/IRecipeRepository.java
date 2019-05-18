package it.vacammar.dao;

import it.vacammar.dto.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface IRecipeRepository extends MongoRepository<Recipe, Integer> {
    List<Recipe> findByAuthor(String author);
}
