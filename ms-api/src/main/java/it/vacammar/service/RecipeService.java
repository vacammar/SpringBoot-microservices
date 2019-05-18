package it.vacammar.service;

import it.vacammar.dao.IRecipeRepository;
import it.vacammar.dto.Recipe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService implements IRecipeService {

    private static final Logger log = LoggerFactory.getLogger(RecipeService.class);

    @Autowired
    private IRecipeRepository recipeRepository;

    @Override
    public List<Recipe> getRecipes() throws ServiceException {
        try {
            return this.recipeRepository.findAll();
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public Recipe getRecipeById(Integer recipeId) throws ServiceException {
        try {
            if(this.recipeRepository.findById(recipeId).isPresent()) {
                return this.recipeRepository.findById(recipeId).get();
            }
            return null;
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public Recipe addRecipe(Recipe recipe) throws ServiceException {
        try {
            return this.recipeRepository.save(recipe);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public void removeRecipe(Integer id) throws ServiceException {
        try {
            this.recipeRepository.deleteById(id);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServiceException(e.getMessage());
        }
    }

    @Override
    public List<Recipe> getRecipeByAuthor(String author) throws ServiceException {
        try {
            return this.recipeRepository.findByAuthor(author);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServiceException(e.getMessage());
        }
    }
}
