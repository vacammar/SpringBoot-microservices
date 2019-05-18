package it.vacammar.service;

import it.vacammar.dto.Recipe;

import java.util.List;

public interface IRecipeService {

    /**
     * Get all recipes.
     *
     * @return
     * @throws ServiceException
     */
    List<Recipe> getRecipes() throws ServiceException;

    /**
     * Get recipe by id.
     *
     * @param recipeId
     * @return
     * @throws ServiceException
     */
    Recipe getRecipeById(Integer recipeId) throws ServiceException;

    /**
     * Add new recipe.
     *
     * @param recipe
     * @return
     * @throws ServiceException
     */
    Recipe addRecipe(Recipe recipe) throws ServiceException;

    /**
     * Delete recipe by id.
     *
     * @param id
     * @throws ServiceException
     */
    void removeRecipe(Integer id) throws ServiceException;

    /**
     * Get recipes by author.
     *
     * @param author
     * @return
     */
    List<Recipe> getRecipeByAuthor(String author) throws ServiceException;
}
