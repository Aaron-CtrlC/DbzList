import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/characters.interface';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPage
{
    constructor(private dbzService:DbzService)
    {
        
    }

    get  Characters(): Character[]
    {
        return [...this.dbzService.characters];
    }

    OnDeleteCharacter(id: string):void
    {
        this.dbzService.delateCharacterById(id)
    }

    AddCharacter(chracter:Character)
    {
        this.dbzService.AddCharacter(chracter)
    }
}