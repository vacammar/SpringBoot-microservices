import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./MenuItem";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menuItemList: MenuItem[] = new Array();

    constructor() {
    }

    ngOnInit() {
        this.initializeMenu();
    }

    function

    initializeMenu() {
        this.menuItemList.push({title: 'Home', routerLink: 'dashboard'});
        this.menuItemList.push({title: 'Recipes', routerLink: 'recipes'});
        this.menuItemList.push({title: 'My Recipes', routerLink: 'myrecipes'});
        this.menuItemList.push({title: 'About Us', routerLink: 'aboutus'});
    }

}
