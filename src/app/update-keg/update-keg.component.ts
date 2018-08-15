import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-update-keg',
  templateUrl: './update-keg.component.html',
  styleUrls: ['./update-keg.component.css']
})

export class UpdateKegComponent  {

  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();
  @Output() clickedAdd = new EventEmitter();

  finishedEditing(){
    this.clickedDone.emit();
  }

  finishedAdding(){
    this.clickedAdd.emit();
  }

}


//
// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Recipe } from '../models/recipe.model';
//
// @Component({
//   selector: 'app-edit-recipe',
//   templateUrl: './edit-recipe.component.html',
//   styleUrls: ['./edit-recipe.component.css']
// })
// export class EditRecipeComponent {
//   @Input() childSelectedRecipe: Recipe;
//   @Output() clickedDone = new EventEmitter();
//
//
//   finishedEditing(){
//     this.clickedDone.emit();
//   }
//
// }
