import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'AddCharacters-dbz',
  templateUrl: 'AddCharacters.component.html'
})

export class AddCharactersComponent 
{
  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter();


  public character: Character=
  {
    name:'',
    power: 0
  }

  emitCharacter()
  {
    console.log(this.character);
    if(this.character.name.length===0) return;

    this.onNewCharacter.emit({...this.character});

    this.character.name= '';
    this.character.power=0;
  }

    
}