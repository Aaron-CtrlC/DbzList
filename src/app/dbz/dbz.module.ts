import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDbzComponent } from './components/List/List.component';
import { MainPage } from './components/pages/main-page.component';

import { AddCharactersComponent } from './components/AddCharacters/AddCharacters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListDbzComponent, MainPage,AddCharactersComponent],
  exports: [ListDbzComponent, MainPage,AddCharactersComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
