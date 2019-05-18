import {Component, OnInit} from '@angular/core';
import {Recipe} from "../model/Recipe";
import {RecipeService} from "../service/recipe.service";
import {GlobalConstantsService} from "../service/global/global-constants.service";

@Component({
    selector: 'app-myrecipe',
    templateUrl: './myrecipe.component.html',
    styleUrls: ['./myrecipe.component.css']
})
export class MyrecipeComponent implements OnInit {

    recipeList: Recipe[];

    constructor(private recipeService: RecipeService, private globalConstantService: GlobalConstantsService) {
    }

    ngOnInit() {
        this.getRecipesByAuthor('vacammar');
    }

    getRecipesByAuthor(author: string) {
        this.recipeService.getRecipesByAuthor(author).subscribe(recipes => this.recipeList = recipes);
    }

    imageURL = this.globalConstantService.getImageUrl();
}
