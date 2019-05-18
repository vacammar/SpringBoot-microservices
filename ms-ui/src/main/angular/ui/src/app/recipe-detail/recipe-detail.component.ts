import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../service/recipe.service";
import {Recipe} from "../model/Recipe";
import {GlobalConstantsService} from "../service/global/global-constants.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private route: ActivatedRoute, private location: Location, private recipeService: RecipeService, private globalConstants: GlobalConstantsService) {
    }

    ngOnInit() {
        this.recipe = new Recipe();
        this.getRecipeDetails();
    }

    getRecipeDetails() {
        const recipeId = Number(this.route.snapshot.paramMap.get('id'));
        this.recipeService.getRecipeById(recipeId).subscribe(recipe => {
            this.recipe = recipe;
            console.log(recipe);
        });
        console.log('Recipe ID: ' + recipeId);
    }

    removeRecipe(id: number): void {
        this.recipeService.removeRecipe(id).subscribe(ack => {
            //this.getRecipe();
        });
    }

    imageURL = this.globalConstants.getImageUrl();
}
