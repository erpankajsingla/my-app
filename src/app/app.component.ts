import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  value = 5;
  //name = 'My First App !';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
