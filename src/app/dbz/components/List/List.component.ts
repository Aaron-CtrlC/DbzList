import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid}from 'uuid';

@Component({
  selector: 'list-dbz',
  templateUrl: 'list.component.html'
})

export class ListDbzComponent {
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10,
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void
  {
    this.onDelete.emit(id)
  }
  
}

