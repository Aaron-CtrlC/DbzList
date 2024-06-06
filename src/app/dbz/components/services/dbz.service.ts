import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid}from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzService {

    public characters: Character[]=[{
        id: uuid(),
        name: 'Krillin',
        power: 1124,
    },{
        id: uuid(),

        name: 'Coku',
        power: 9500,
    },
    {
    id: uuid(),
    name: 'Vegeeta',
    power: 7500
    }]

    AddCharacter(character:Character):void{

        const newCharacter: Character= {id: uuid(),...character}

        this.characters.push(character)
    }

 //   onDeleteCharacter(index:number){this.characters.splice(index);}

delateCharacterById(id:string)
{
    this.characters= this.characters.filter( character => character.id != id);
}
}