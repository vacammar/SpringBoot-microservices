package it.vacammar.api;

import it.vacammar.dto.Recipe;
import it.vacammar.dto.User;
import it.vacammar.service.IRecipeService;
import it.vacammar.service.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping(value = "/api/v1/recipe")
public class RecipeApi {

    private static final Logger log = LoggerFactory.getLogger(RecipeApi.class);
    @Autowired
    private IRecipeService recipeService;

    @RequestMapping(value = "/auth", method = RequestMethod.POST)
    private ResponseEntity<User> authentication(User user) {
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/recipes")
    public ResponseEntity<List<Recipe>> getRecipes() {
        try {
            return new ResponseEntity<>(this.recipeService.getRecipes(), HttpStatus.OK);
        } catch (ServiceException e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/recipe/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable(name = "id") Integer recipeId) {
        try {
            return new ResponseEntity<>(this.recipeService.getRecipeById(recipeId), HttpStatus.OK);
        } catch (ServiceException e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe) {
        try {
            return new ResponseEntity<>(this.recipeService.addRecipe(recipe), HttpStatus.OK);
        } catch (ServiceException e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "remove/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> removeRecipe(@PathVariable(name = "id") Integer id) {
        try {
            this.recipeService.removeRecipe(id);
            return new ResponseEntity<>("OK", HttpStatus.OK);
        } catch (ServiceException e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "recipe/author/{author}")
    public ResponseEntity<List<Recipe>> getReciperByAuthor(@PathVariable(name = "author") String author) {
        try {
            return new ResponseEntity<>(this.recipeService.getRecipeByAuthor(author), HttpStatus.OK);
        } catch (ServiceException e) {
            log.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
