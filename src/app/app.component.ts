import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changelog-widget';

  showDescription: boolean = false;
  state: 'BREAKING' | 'OTHER' | 'IN PROGRESS' | 'ADDED' | 'FIXED' | 'CHANGED' | 'DEPRECATED' | 'REMOVED' = 'ADDED';
  listOfEntries = [{state:'ADDED'}];

  toggleStates(i:number){
    this.listOfEntries.forEach((entry,index)=>{
      if(i===index){
        switch (entry.state){
          case 'ADDED':
            entry.state = 'FIXED';
            break;
          case 'FIXED':
            entry.state = 'CHANGED';
            break;
          case 'CHANGED':
            entry.state = 'DEPRECATED';
            break;
          case 'DEPRECATED':
            entry.state = 'REMOVED';
            break;
          case 'REMOVED':
            entry.state = 'BREAKING';
            break;
          case 'BREAKING':
            entry.state = 'OTHER';
            break;
          case 'OTHER':
            entry.state = 'IN PROGRESS';
            break;
          case 'IN PROGRESS':
            entry.state = 'ADDED';
            break;
        }
      }
    })
  };

  onClickDescription(){
    this.showDescription = !this.showDescription;
  };

  onAddEntry(){
    this.listOfEntries.push({state:'ADDED'});
  }
}
