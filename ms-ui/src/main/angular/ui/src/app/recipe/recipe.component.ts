import {Component, OnInit} from '@angular/core';
import {Recipe} from '../model/Recipe';
import {RecipeService} from '../service/recipe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalConstantsService} from "../service/global/global-constants.service";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
    recipe: Recipe;
    closeDetail: boolean;
    recipeList: Recipe[];
    recipeForm: FormGroup;
    AUTHOR: string;

    constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, private globalConstantsService: GlobalConstantsService) {
        this.AUTHOR = 'vacammar';
    }

    ngOnInit() {
        this.recipeForm = this.formBuilder.group({
            id: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required]
        });
        this.getRecipe();
    }

    get formControls() {
        return this.recipeForm.controls;
    }

    getRecipe(): void {
        this.recipeService.getRecipes().subscribe(_recipe => this.recipeList = _recipe);
        this.closeDetail = false;
    }

    detail(recipe: Recipe) {
        this.recipe = recipe;
        this.closeDetail = false;
    }

    addRecipe(): void {
        var newRecipe: Recipe = this.recipeForm.value;
        newRecipe.author = this.AUTHOR;
        this.recipeService.addRecipe(newRecipe).subscribe(recipe => {
            if (recipe) {
                this.recipeList.push(recipe);
            }
        });
    }

    removeRecipe(id: number): void {
        this.recipeService.removeRecipe(id).subscribe(ack => {
            this.getRecipe();
        });
    }

    imageURL = this.globalConstantsService.getImageUrl();
}
