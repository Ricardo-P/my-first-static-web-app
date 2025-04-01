import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello my name is {{name}}</div>`,
})
export class AppComponent {
  name = 'Ricardo Portillo';
}
