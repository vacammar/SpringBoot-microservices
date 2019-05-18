import {Injectable} from '@angular/core';
import {Recipe} from '../model/Recipe';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    API_URL = 'http://localhost:8084/recipe-api/api/v1/recipe';

    constructor(private http: HttpClient) {
    }

    getRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.API_URL + '/recipes');
    }

    getRecipeById(id: Number): Observable<Recipe> {
        return this.http.get<Recipe>(this.API_URL + '/recipe/' + id);
    }

    addRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(this.API_URL, recipe);
    }

    removeRecipe(id: number): Observable<Recipe> {
        return this.http.delete<Recipe>(this.API_URL + '/remove/' + id);
    }

    getRecipesByAuthor(author: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.API_URL + '/recipe/author/' + author);
    }
}

